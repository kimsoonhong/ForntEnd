import firebase from "../../../../commons/firebase/firebase";

export interface IWorkspaceDetailProps {
  boards?: firebase.firestore.QueryDocumentSnapshot;
}
export interface IWorkspaceDetailUIProps {
  boards?: firebase.firestore.QueryDocumentSnapshot;
  onClickMoveToBoard: () => void;
}
export interface IProps {
  colorCode: string;
}
