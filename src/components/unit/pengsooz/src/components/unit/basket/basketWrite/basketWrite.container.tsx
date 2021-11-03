import BasketWritePageUI from "./basketWrite.presenter";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import { dbservice } from "../../../../commons/firebase/firebase";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";

const BasketWritePage = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [basketTitle, setBasketTitle] = useState("");
  const router = useRouter();
  const boardId = router.query.boardId;
  const [boardValue] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const onClickAddBasket = () => {
    setIsAdd((prev) => !prev);
  };
  const onChangeAddBasket = (event: ChangeEvent<HTMLInputElement>) => {
    setBasketTitle(event.target.value);
  };
  const basketId = dbservice.collection("basket").doc().id;
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });
  const onClickCreateBasket = async () => {
    const basketIndex = dbservice.collection("basket").get();
    const basketIndexLength = (await basketIndex).docs.length;
    const value = {
      basketId: basketId,
      boardId: boardId,
      title: basketTitle,
      createdAt: new Date(),
      index: basketIndexLength + 1,
    };
    if (basketTitle !== "") {
      try {
        await dbservice.collection("basket").doc(basketId).set(value);
        setIsAdd(false);
        setBasketTitle("");
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
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickCreateBasket();
      return;
    }
    if (e.key === "Escape") {
      setIsAdd((prev) => !prev);
    }
  };

  return (
    <BasketWritePageUI
      isAdd={isAdd}
      colorCode={boardValue?.data()?.colorCode}
      onKeyPress={onKeyPress}
      onClickAddBasket={onClickAddBasket}
      onClickCreateBasket={onClickCreateBasket}
      onChangeAddBasket={onChangeAddBasket}
      inputRef={inputRef}
    />
  );
};

export default BasketWritePage;
