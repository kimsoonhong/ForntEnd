import {
  Wrapper,
  AddItem,
  ItemContainerEdit,
  ItemCreateInput,
  ItemCreateBtn,
} from "./itemEdit.styles";

import MicroButton from "../../../commons/button/micro.Button";
import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  RefObject,
  SetStateAction,
} from "react";

interface Iprops {
  onChangeItemTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddItem: () => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLInputElement>;
  colorCode: string;
}

export default function ItemEditUI(props: Iprops) {
  return (
    <>
      {props.isAdd ? (
        <div>
          <Wrapper>
            <ItemContainerEdit color={props.colorCode}>
              <ItemCreateInput
                onChange={props.onChangeItemTitle}
                maxLength={22}
                ref={props.inputRef}
                onKeyDown={props.onKeyPress}
              />
              <ItemCreateBtn>
                <MicroButton
                  buttonName="생성하기"
                  onClick={props.onClickAddItem}
                />
                <MicroButton
                  buttonName="취소하기"
                  onClick={() => props.setIsAdd(false)}
                />
              </ItemCreateBtn>
            </ItemContainerEdit>
          </Wrapper>
        </div>
      ) : (
        <AddItem onClick={() => props.setIsAdd(true)}>+ Add Item</AddItem>
      )}
    </>
  );
}
