import WorkspaceUI from "./WorkSpace.presenter";
import firebase, { dbservice } from "../../../commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Modal } from "antd";

const Workspace = () => {
  const router = useRouter();
  const [boardTitle, setBoardTitle] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isCustomBoardOpen, setIsCustomBoardOpen] = useState(false);
  const [user, userLoading] = useAuthState(firebase.auth());
  const [boards, boardsLoading] = useCollection(
    firebase.firestore().collection("boards").orderBy("createdAt"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const onClickOpenLogoutModal = () => {
    setIsSelectOpen(true);
  };
  const onClickCloseLogoutModal = () => {
    setIsSelectOpen(false);
  };
  const onClickLogout = async () => {
    await firebase.auth().signOut();
    router.push("/");
  };

  const onClickCreateBoard = async () => {
    const boardId = dbservice.collection("boards").doc().id;
    if (!boardTitle) {
      Modal.warning({ content: "보드 이름을 입력해 주세요." });
    } else if (!colorCode) {
      Modal.warning({ content: "배경 색상을 선택해 주세요." });
    } else {
      try {
        const value = {
          boardId: boardId,
          title: boardTitle,
          colorCode: colorCode,
          createdAt: new Date(),
          updatedAt: new Date(),
          isAlive: true,
        };
        await dbservice.collection("boards").doc(boardId).set(value);
        router.push(`workspace/${boardId}`);
      } catch (error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };
  const onClickCloseBoardModal = () => {
    setIsCustomBoardOpen(false);
    setColorCode("");
  };
  const onChangeBoardTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(event.target.value);
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickCreateBoard();
      return;
    }
    if (e.key === "Escape") {
      onClickCloseBoardModal();
    }
  };
  return (
    <WorkspaceUI
      user={user}
      userLoading={userLoading}
      boards={boards}
      boardsLoading={boardsLoading}
      isSelectOpen={isSelectOpen}
      setColorCode={setColorCode}
      onKeyPress={onKeyPress}
      isCustomBoardOpen={isCustomBoardOpen}
      setIsCustomBoardOpen={setIsCustomBoardOpen}
      onClickOpenLogoutModal={onClickOpenLogoutModal}
      onClickCloseLogoutModal={onClickCloseLogoutModal}
      onClickLogout={onClickLogout}
      onClickCreateBoard={onClickCreateBoard}
      onClickCloseBoardModal={onClickCloseBoardModal}
      onChangeBoardTitle={onChangeBoardTitle}
    />
  );
};

export default Workspace;
