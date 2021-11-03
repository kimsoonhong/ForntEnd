import CommentUI from "./comment.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../commons/firebase/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Comments() {
  const [user] = useAuthState(firebase.auth());
  const router = useRouter();
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("comments").orderBy("createdAt", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const itemId = router.query.itemDetail;

  return (
    <CommentUI
      value={value}
      loading={loading}
      error={error}
      itemId={itemId}
      user={user}
    />
  );
}
