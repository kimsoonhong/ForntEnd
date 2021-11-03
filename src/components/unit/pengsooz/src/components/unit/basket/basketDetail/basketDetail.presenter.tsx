import {
  ScrollSnapWrapper,
  Wrapper,
  BasketInfo,
  BasketTitle,
  BasketMenu,
  BasketEdit,
  BasketEditInput,
  BasketEditBtn,
} from "./basketDetail.styles";
import Item from "../../item/item";
import MicroButton from "../../../commons/button/micro.Button";
import MenuModal from "../../../commons/modal/Menu.modal";
import SelectModal from "../../../commons/modal/Select.modal";
import { Dropdown } from "antd";
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

interface IBasketDetailPageUI {
  isModal: boolean;
  isUpdate: boolean;
  doc: any;
  isMenu?: boolean;
  updateTitle: string;
  setIsMenu?: Dispatch<SetStateAction<boolean>>;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  boardId: string;
  colorCode: string;
  messagesRef: any;
  inputRef: any;
  clickRef: any;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClickLeft: () => void;
  onClickRight: () => void;
  onClickCancel: () => void;
  onClickUpdate: () => void;
  onClickMenu: () => void;
  onClickBasketUpdate: () => void;
  onClickDeleteComfirm: () => void;
  onChangeUpdateTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BasketDetailPageUI = (props: IBasketDetailPageUI) => {
  return (
    <>
      {props.isModal && (
        <SelectModal
          buttonNameLeft="예"
          buttonNameRight="아니요"
          onClickLeft={props.onClickLeft}
          onClickRight={props.onClickRight}
          content="정말로 삭제 하시겠습니까?"
        />
      )}
      {props.boardId === props.doc.data().boardId && (
        <ScrollSnapWrapper ref={props.messagesRef}>
          <Wrapper>
            {props.isUpdate ? (
              <BasketEdit color={props.colorCode}>
                <BasketEditInput
                  onChange={props.onChangeUpdateTitle}
                  defaultValue={props.doc.data().title}
                  maxLength={15}
                  onKeyDown={props.onKeyPress}
                  ref={props.inputRef}
                />
                <BasketEditBtn>
                  <MicroButton
                    buttonName="수정하기"
                    onClick={props.onClickUpdate}
                  />
                  <MicroButton
                    buttonName="취소하기"
                    onClick={props.onClickCancel}
                  />
                </BasketEditBtn>
              </BasketEdit>
            ) : (
              <BasketInfo>
                <BasketTitle>{props.doc.data().title}</BasketTitle>
                <Dropdown
                  overlayStyle={{ paddingTop: "10px" }}
                  overlay={
                    <MenuModal
                      buttonNameTop="바스켓 수정하기"
                      buttonNameBottom="바스켓 삭제하기"
                      onClickTop={props.onClickBasketUpdate}
                      onClickBottom={props.onClickDeleteComfirm}
                    />
                  }
                  trigger={["hover"]}
                  placement="bottomRight"
                >
                  <BasketMenu onClick={props.onClickMenu}>...</BasketMenu>
                </Dropdown>
              </BasketInfo>
            )}
            <Item
              basketId={props.doc.data().basketId}
              isAdd={props.isAdd}
              setIsAdd={props.setIsAdd}
            />
          </Wrapper>
        </ScrollSnapWrapper>
      )}
    </>
  );
};

export default BasketDetailPageUI;
