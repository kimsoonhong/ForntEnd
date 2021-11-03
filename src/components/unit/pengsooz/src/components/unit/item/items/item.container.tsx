import ItemUI from "./item.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebase, { dbservice } from "../../../../commons/firebase/firebase";
import { useDocument } from "react-firebase-hooks/firestore";

interface Iprops {
  basketId: string;
}

export default function Items(props: Iprops) {
  const router = useRouter();
  const [ItemData, setItemdata] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const boardId = router.query.boardId;
  const [value] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const onClickEnterToItemDetail = (event: any) => () => {
    const itemId = event.itemId;
    router.push(`/pengsooz/workspace/${boardId}/${itemId}`);
  };

  useEffect(() => {
    const getItemData = firebase.firestore().collection("item");
    getItemData.orderBy("index", "asc").onSnapshot((result: any) => {
      const newresult: any = [];
      result.forEach((doc: any) => {
        const docData = doc.data();
        newresult.push(docData);
      });
      setItemdata(newresult);
    });
  }, []);

  return (
    <div>
      <ItemUI
        isAdd={isAdd}
        onClickEnterToItemDetail={onClickEnterToItemDetail}
        setIsAdd={setIsAdd}
        ItemData={ItemData}
        basketId={props.basketId}
        colorCode={value?.data()?.colorCode}
      />
    </div>
  );
}
