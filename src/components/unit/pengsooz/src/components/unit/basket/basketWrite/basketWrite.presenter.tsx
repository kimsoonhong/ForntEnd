import {
  MainWrapper,
  SubWrapper,
  AddWrapper,
  BasketCreate,
  BasketCreateInput,
  BasketCreateBtn,
  AddBasket,
  Wrapper,
} from "./basketWrite.styles";
import MicroButton from "../../../commons/button/micro.Button";

import { ChangeEvent, KeyboardEvent } from "react";

interface IBasketWritePageUIProps {
  isAdd: boolean;
  colorCode: string;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClickAddBasket: () => void;
  onClickCreateBasket: () => void;
  onChangeAddBasket: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
}
const BasketWritePageUI = (props: IBasketWritePageUIProps) => {
  return (
    <MainWrapper>
      {props.isAdd ? (
        <SubWrapper>
          <AddWrapper>
            <BasketCreate color={props.colorCode}>
              <BasketCreateInput
                onChange={props.onChangeAddBasket}
                maxLength={15}
                onKeyDown={props.onKeyPress}
                ref={props.inputRef}
              />
              <BasketCreateBtn>
                <MicroButton
                  buttonName="등록하기"
                  onClick={props.onClickCreateBasket}
                />
                <MicroButton
                  buttonName="취소하기"
                  onClick={props.onClickAddBasket}
                />
              </BasketCreateBtn>
            </BasketCreate>
          </AddWrapper>
        </SubWrapper>
      ) : (
        <Wrapper>
          <AddBasket onClick={props.onClickAddBasket}>+ Add Basket</AddBasket>
        </Wrapper>
      )}
    </MainWrapper>
  );
};

export default BasketWritePageUI;
