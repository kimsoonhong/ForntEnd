import Basket from "../basket/basket.container";
import CustomBoard from "../../commons/modal/CustomBoard.modal";
import Menu from "../../commons/modal/Menu.modal";
import Select from "../../commons/modal/Select.modal";
import Blur from "../../commons/blur/Blur";
import { Dropdown } from "antd";
import firebase from "../../../commons/firebase/firebase";
import {
  Wrapper,
  HeadWrapper,
  TopWrapper,
  ArrowLeftIcon,
  MenuIcon,
  BoardTitle,
  BasketWrapper,
  BasketPageWrapper,
  BasketPage,
} from "./board.styles";
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

interface IBoardUI {
  onClickEnterToWS: () => void;
  setColorCode: Dispatch<SetStateAction<string>>;
  onClickMenu: () => void;
  onClickDelete: () => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => Promise<void>;
  onClickDeleteConfirm: () => void;
  onClickCreateBoardModal: () => void;
  onClickCancel: () => void;
  onKeyPressUpdate: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPressCancel: (event: KeyboardEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  boardId: any;
  isMenu: boolean;
  isModal: boolean;
  user?: firebase.User | null | undefined;
  value: any;
}

export default function BoardUI(props: IBoardUI) {
  const colorCode = props.value?.data()?.colorCode;
  return (
    <div>
      {props.isOpen && (
        <CustomBoard
          buttonNameLeft="수정하기"
          buttonNameRight="취소하기"
          onClickRight={props.onClickCancel}
          onClickLeft={props.onClickUpdate}
          onChangeTitle={props.onChangeTitle}
          defaultValue={props.value.data().title}
          setColorCode={props.setColorCode}
          onKeyDown={props.onKeyPressUpdate}
        />
      )}
      {props.isModal && (
        <Select
          buttonNameLeft="예"
          buttonNameRight="아니요"
          onClickLeft={props.onClickDelete}
          onClickRight={props.onClickDeleteConfirm}
          content="정말로 삭제 하시겠습니까?"
        />
      )}
      {props.value?.data()?.title ? (
        <Wrapper color={`/images/${colorCode.slice(1).concat(".jpeg")}`}>
          <HeadWrapper color={colorCode}>
            <TopWrapper>
              <ArrowLeftIcon onClick={props.onClickEnterToWS} />
              <BoardTitle>{props.value.data().title}</BoardTitle>
              <Dropdown
                overlay={
                  <Menu
                    buttonNameTop="보드 수정하기"
                    buttonNameBottom="보드 삭제하기"
                    onClickTop={props.onClickCreateBoardModal}
                    onClickBottom={props.onClickDeleteConfirm}
                  />
                }
                trigger={["click"]}
                visible={props.isMenu}
                placement="bottomRight"
                arrow={false}
              >
                <MenuIcon onClick={props.onClickMenu} />
              </Dropdown>
            </TopWrapper>
          </HeadWrapper>
          <BasketWrapper>
            {props.isMenu && <Blur />}
            <Basket boardId={props.boardId} />
          </BasketWrapper>
          <BasketPageWrapper color={colorCode}>
            <BasketPage src="/images/default_profile.png" />
            <BasketPage src="/images/default_profile.png" />
            <BasketPage src="/images/default_profile.png" />
            <BasketPage src="/images/default_profile.png" />
          </BasketPageWrapper>
        </Wrapper>
      ) : (
        <></>
      )}
    </div>
  );
}
