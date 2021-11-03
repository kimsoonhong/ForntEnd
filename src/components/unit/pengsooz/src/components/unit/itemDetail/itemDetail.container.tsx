import ItemDetailUI from "./itemDetail.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import firebase, { dbservice } from "../../../commons/firebase/firebase";
import { Modal } from "antd";
import { useDocument } from "react-firebase-hooks/firestore";

export default function ItemDetail() {
  const router = useRouter();
  const boardId = router.query.boardId;
  const [value] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const [itemData, setItemData] = useState({
    isAlive: true,
    itemTitle: String,
    itemContents: String,
  });
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [isOpenContents, setIsOpenContents] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [itemTitle, setItemTitle] = useState("");
  const [itemContents, setItemContents] = useState("");
  const itemId: any = router.query.itemDetail;

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  useEffect(() => {
    if (itemData?.isAlive === false) {
      router.push(`/workspace/${boardId}`);
    }
  }, [itemData?.isAlive]);

  useEffect(() => {
    async function getItemData() {
      firebase
        .firestore()
        .collection("item")
        .doc(String(itemId))
        .onSnapshot((result: any) => {
          setItemData(result.data());
          setItemTitle(result.data()?.itemTitle);
          setItemContents(result.data()?.itemContents);
        });
    }
    getItemData();
  }, [boardId]);

  const onClickEnterToBoard = () => {
    router.push(`/workspace/${boardId}`);
  };

  const onClickDeleteItem = () => {
    const data = {
      itemTitle: itemTitle,
      createdAt: new Date(),
      isAlive: false,
    };
    firebase.firestore().collection("item").doc(itemId).update(data);
    firebase.firestore().collection("item").doc(itemId).delete();
  };
  const updateItemTitle = async () => {
    if (itemTitle === "") {
      Modal.error({ content: "내용을 입력해주세요." });
      setIsOpenTitle(false);
      return;
    }

    const data = {
      itemTitle: itemTitle,
    };
    await firebase.firestore().collection("item").doc(itemId).update(data);
    setIsOpenTitle(false);
  };

  const updateItemContents = () => {
    const data = {
      itemContents: itemContents,
    };
    firebase.firestore().collection("item").doc(itemId).update(data);
    setIsOpenContents(false);
  };

  const onChangeItemTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.target.value);
  };

  const onChangeItemContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setItemContents(event.target.value);
  };

  const onClickItemTitle = () => {
    setIsOpenTitle(true);
    setIsOpenContents(false);
  };
  const onClickItemContents = () => {
    setIsOpenContents(true);
    setIsOpenTitle(false);
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateItemTitle();
    }
  };
  return (
    <div>
      <ItemDetailUI
        value={value}
        onClickEnterToBoard={onClickEnterToBoard}
        onClickDeleteItem={onClickDeleteItem}
        isOpenTitle={isOpenTitle}
        isOpenContents={isOpenContents}
        setIsOpenContents={setIsOpenContents}
        setIsOpenTitle={setIsOpenTitle}
        onKeyPress={onKeyPress}
        itemData={itemData}
        inputRef={inputRef}
        updateItemTitle={updateItemTitle}
        onChangeItemTitle={onChangeItemTitle}
        updateItemContents={updateItemContents}
        onChangeItemContents={onChangeItemContents}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        onClickItemTitle={onClickItemTitle}
        onClickItemContents={onClickItemContents}
        itemContents={itemContents}
      />
    </div>
  );
}
