import { Wrapper, Text, Image } from "./WorkspaceDetail.styles";
import { IWorkspaceDetailUIProps } from "./WorkspaceDetail.types";

const WorkspaceDetailUI = (props: IWorkspaceDetailUIProps) => {
  const colorCode = props.boards?.data().colorCode;
  return (
    <Wrapper onClick={props.onClickMoveToBoard}>
      <Image color={`/images/${colorCode.slice(1).concat(".jpeg")}`} />
      <Text>{props.boards?.data().title}</Text>
    </Wrapper>
  );
};

export default WorkspaceDetailUI;
