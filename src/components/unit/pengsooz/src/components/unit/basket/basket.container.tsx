import BasketUI from "./basket.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../commons/firebase/firebase";

interface Iprops {
  boardId: string;
}

export default function Basket(props: Iprops) {
  const [value, loading] = useCollection(
    firebase.firestore().collection("basket").orderBy("index", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return <BasketUI value={value} boardId={props.boardId} loading={loading} />;
}
