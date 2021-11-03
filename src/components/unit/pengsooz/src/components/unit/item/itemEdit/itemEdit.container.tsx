import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import ItemEditUI from "./itemEdit.presenter";
import firebase, { dbservice } from "../../../../commons/firebase/firebase";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";

interface Iprops {
  basketId: string;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
}

export default function ItemEdit(props: Iprops) {
  const [ItemTitle, setItemTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const boardId = router.query.boardId;
  const [value] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });
  const onClickAddItem = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (ItemTitle === "") {
      Modal.error({ content: "내용을 입력해주세요." });
      return;
    }
    const itemIndex = firebase.firestore().collection("item").get();
    const indexLength = (await itemIndex).docs.length;
    const itemId = firebase.firestore().collection("item").doc().id;
    const data = {
      itemTitle: ItemTitle,
      createdAt: new Date(),
      itemId: itemId,
      itemContents: "",
      basketId: props.basketId,
      isAlive: true,
      index: indexLength + 1,
    };
    firebase.firestore().collection("item").doc(itemId).set(data);
    props.setIsAdd(false);
    setItemTitle("");
    setIsSubmitting(false);
  };
  const onChangeItemTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.target.value);
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickAddItem();
    }
    if (e.key === "Escape") {
      props.setIsAdd(false);
    }
  };

  return (
    <div>
      <ItemEditUI
        colorCode={value?.data()?.colorCode}
        onChangeItemTitle={onChangeItemTitle}
        onKeyPress={onKeyPress}
        onClickAddItem={onClickAddItem}
        isAdd={props.isAdd}
        setIsAdd={props.setIsAdd}
        inputRef={inputRef}
      />
    </div>
  );
}
