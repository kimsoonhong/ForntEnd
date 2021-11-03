import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { dbservice } from "../../../../commons/firebase/firebase";
import CommentsWriteUI from "./commentsWrite.presenter";

interface Iprops {
  user: any;
  itemId: string;
}

export default function CommentsWrite(props: Iprops) {
  const [contents, setContents] = useState("");
  const router = useRouter();
  const boardId: any = router.query.boardId;
  const [boardValue] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  const onClickSubmit = async () => {
    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }
    await dbservice.collection("comments").add({
      writer: props.user?.displayName,
      uid: props.user?.uid,
      contents: contents,
      image: props.user?.photoURL,
      itemId: props.itemId,
      createdAt: new Date(),
    });
    setContents("");
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSubmit();
    }
  };
  return (
    <CommentsWriteUI
      colorCode={boardValue?.data()?.colorCode}
      onClickSubmit={onClickSubmit}
      onChange={onChange}
      onKeyPress={onKeyPress}
      contents={contents}
    />
  );
}
