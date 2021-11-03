import { ChangeEvent, useState, useEffect, KeyboardEvent } from "react";
import BoardUI from "./board.presenter";
import { useRouter } from "next/router";
import firebase, { dbservice } from "../../../commons/firebase/firebase";
import { Modal } from "antd";
import { useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Board() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [user] = useAuthState(firebase.auth());
  const router = useRouter();
  const boardId: any = router.query.boardId;
  const [value] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const [updateTitle, setUpdateTitle] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [confirmAlive, setConfirmAlive] = useState();

  useEffect(() => {
    setUpdateTitle(value?.data()?.title);
    setColorCode(value?.data()?.colorCode);
  }, [value]);

  const onClickCreateBoardModal = () => {
    setIsOpen(true);
    setIsMenu(false);
  };
  const onClickMenu = () => {
    setIsMenu((prev) => !prev);
  };

  const onClickEnterToWS = () => {
    router.push(`/workspace`);
  };
  const onClickCancel = () => {
    setIsOpen(false);
  };

  const onClickUpdate = async () => {
    if (updateTitle !== "") {
      try {
        await dbservice.collection("boards").doc(boardId).update({
          title: updateTitle,
          colorCode: colorCode,
        });
        setIsOpen(false);
      } catch (err) {
        Modal.error({
          content: err.message,
        });
      }
    } else {
      Modal.error({
        content: "제목을 입력해주세요 !",
      });
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateTitle(event.target.value);
  };
  const onClickDelete = async () => {
    try {
      await dbservice.collection("boards").doc(boardId).update({
        isAlive: false,
      });
      await dbservice.collection("boards").doc(boardId).delete();
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onClickDeleteConfirm = () => {
    setIsMenu(false);
    setIsModal((prev) => !prev);
  };
  useEffect(() => {
    const isAliveCondition = async () => {
      dbservice
        .collection("boards")
        .doc(boardId)
        .onSnapshot((result) => setConfirmAlive(result.data()?.isAlive));
    };
    isAliveCondition();
  }, [boardId]);
  useEffect(() => {
    if (confirmAlive === false) {
      router.push("/workspace");
    }
  }, [confirmAlive]);

  const onKeyPressUpdate = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickUpdate();
    }
    if (e.key === "Escape") {
      onClickCancel();
    }
  };
  const onKeyPressCancel = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickDelete();
      return;
    }
    if (e.key === "Escape") {
      onClickDeleteConfirm();
    }
  };

  useEffect(() => {
    const close: any = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <BoardUI
      isOpen={isOpen}
      boardId={boardId}
      isMenu={isMenu}
      isModal={isModal}
      value={value}
      user={user}
      onKeyPressCancel={onKeyPressCancel}
      onKeyPressUpdate={onKeyPressUpdate}
      setColorCode={setColorCode}
      onClickMenu={onClickMenu}
      onClickDelete={onClickDelete}
      onChangeTitle={onChangeTitle}
      onClickUpdate={onClickUpdate}
      onClickDeleteConfirm={onClickDeleteConfirm}
      onClickCreateBoardModal={onClickCreateBoardModal}
      onClickCancel={onClickCancel}
      onClickEnterToWS={onClickEnterToWS}
    />
  );
}
