import { Wrapper, PlusIcon } from "./WorkspaceWrite.styles";
import { IWorkspaceWriteUIProps } from "./WorkspaceWrite.types";

const WorkspaceWriteUI = (props: IWorkspaceWriteUIProps) => {
  return (
    <Wrapper onClick={props.onClickOpenBoardModal}>
      <PlusIcon />
    </Wrapper>
  );
};

export default WorkspaceWriteUI;
