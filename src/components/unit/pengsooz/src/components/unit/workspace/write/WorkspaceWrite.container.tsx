import WorkspaceWriteUI from "./WorkspaceWrite.presenter";
import { IWorkspaceWriteProps } from "./WorkspaceWrite.types";

const WorkspaceWrite = (props: IWorkspaceWriteProps) => {
  const onClickOpenBoardModal = () => {
    props.setIsCustomBoardOpen(true);
  };
  return <WorkspaceWriteUI onClickOpenBoardModal={onClickOpenBoardModal} />;
};

export default WorkspaceWrite;
