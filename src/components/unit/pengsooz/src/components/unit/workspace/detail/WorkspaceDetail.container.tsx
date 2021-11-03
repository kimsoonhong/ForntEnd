import { useRouter } from "next/router";
import WorkspaceDetailUI from "./WorkspaceDetail.presenter";
import { IWorkspaceDetailProps } from "./WorkspaceDetail.types";

const WorkspaceDetail = (props: IWorkspaceDetailProps) => {
  const router = useRouter();
  const onClickMoveToBoard = () => {
    router.push(`workspace/${props.boards?.data().boardId}`);
  };

  return (
    <WorkspaceDetailUI
      onClickMoveToBoard={onClickMoveToBoard}
      boards={props.boards}
    />
  );
};

export default WorkspaceDetail;
