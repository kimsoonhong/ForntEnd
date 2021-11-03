import {
  Wrapper,
  TopWrapper,
  LogoutButton,
  ProfileWrapper,
  Photo,
  TextWrapper,
  DisplayName,
  Email,
  MiddleWrapper,
  Title,
  BoardsWrapper,
} from "./Workspace.styles";
import { IWorkspaceUIProps } from "./Workspace.types";
import WorkspaceWrite from "./write/WorkspaceWrite.container";
import Select from "../../commons/modal/Select.modal";
import CustomBoard from "../../commons/modal/CustomBoard.modal";
import WorkspaceDetail from "./detail/WorkspaceDetail.container";

const WorkspaceUI = (props: IWorkspaceUIProps) => {
  return (
    <>
      {props.isSelectOpen && (
        <Select
          onClickLeft={props.onClickLogout}
          onClickRight={props.onClickCloseLogoutModal}
          buttonNameLeft="예"
          buttonNameRight="아니요"
          content="로그아웃 하시겠습니까?"
        />
      )}
      {props.isCustomBoardOpen && (
        <CustomBoard
          setColorCode={props.setColorCode}
          onClickLeft={props.onClickCreateBoard}
          onClickRight={props.onClickCloseBoardModal}
          onChangeTitle={props.onChangeBoardTitle}
          onKeyDown={props.onKeyPress}
          buttonNameLeft="생성하기"
          buttonNameRight="취소하기"
          defaultValue=""
        />
      )}
      <Wrapper>
        <div style={{ width: "100%" }}>
          <TopWrapper>
            <ProfileWrapper>
              {!props.userLoading && props.user && (
                <>
                  <Photo
                    src={props.user?.photoURL || "/images/default_pengsooz"}
                  />
                  <TextWrapper>
                    <DisplayName>{props.user?.displayName}</DisplayName>
                    <Email>{props.user?.email}</Email>
                  </TextWrapper>
                </>
              )}
            </ProfileWrapper>
            <LogoutButton onClick={props.onClickOpenLogoutModal}>
              로그아웃
            </LogoutButton>
          </TopWrapper>
        </div>
        <MiddleWrapper>
          <Title>Boards List</Title>
          <BoardsWrapper>
            {!props.boardsLoading &&
              props.boards &&
              props.boards.docs.map((doc) => (
                <WorkspaceDetail key={doc.id} boards={doc} />
              ))}
            <WorkspaceWrite setIsCustomBoardOpen={props.setIsCustomBoardOpen} />
          </BoardsWrapper>
        </MiddleWrapper>
      </Wrapper>
    </>
  );
};

export default WorkspaceUI;
