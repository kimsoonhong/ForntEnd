import BasketDetailPageUI from "./basketDetail.presenter";
import { useDocument } from "react-firebase-hooks/firestore";
import { dbservice } from "../../../../commons/firebase/firebase";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";

interface Iprops {
  messagesRef: any;
  boardId: string;
  doc: any;
  onClickBasketUpdate: () => void;
}

const BasketDetailPage = (props: Iprops) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(props.doc.data().title);
  const router = useRouter();
  const boardId = router.query.boardId;
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const clickRef = useRef<HTMLElement | null>(null);
  const [value] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const onClickMenu = () => {
    setIsAdd(false);
  };
  const onClickBasketUpdate = () => {
    setIsUpdate(true);
  };
  useEffect(() => {
    inputRef.current?.focus();
  });
  const onClickUpdate = async () => {
    if (updateTitle !== "") {
      try {
        await dbservice.collection("basket").doc(props.doc.id).update({
          title: updateTitle,
        });
        setIsUpdate(false);
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
  const onClickLeft = async () => {
    try {
      await dbservice.collection("basket").doc(props.doc.id).delete();
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onClickDeleteComfirm = () => {
    setIsModal(true);
  };
  const onClickRight = () => {
    setIsModal(false);
  };
  const onChangeUpdateTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateTitle((event.target as any).value);
  };
  const onClickCancel = () => {
    setIsUpdate(false);
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickUpdate();
      return;
    }
    if (e.key === "Escape") {
      setIsUpdate(false);
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
    <BasketDetailPageUI
      isAdd={isAdd}
      setIsAdd={setIsAdd}
      inputRef={inputRef}
      clickRef={clickRef}
      isUpdate={isUpdate}
      isModal={isModal}
      updateTitle={updateTitle}
      doc={props.doc}
      messagesRef={props.messagesRef}
      boardId={props.boardId}
      onKeyPress={onKeyPress}
      colorCode={value?.data()?.colorCode}
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
      onClickDeleteComfirm={onClickDeleteComfirm}
      onClickCancel={onClickCancel}
      onChangeUpdateTitle={onChangeUpdateTitle}
      onClickUpdate={onClickUpdate}
      onClickBasketUpdate={onClickBasketUpdate}
      onClickMenu={onClickMenu}
    />
  );
};

export default BasketDetailPage;
