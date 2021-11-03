import {
  Wrapper,
  BackImg,
  InnerWrapper,
  IconWrapper,
  ArrowLeftIcon,
  DeleteIcon,
  TitleWrapper,
  Text,
  DetailTitleInput,
  DetailTitleDiv,
  ConfirmTitleButton,
  ContentWrapper,
  DetailContentsTextArea,
  DetailContentsDiv,
  ConfirmContentButton,
} from "./itemDetail.styles";
import Comments from "../comments/comment.container";
import Select from "../../commons/modal/Select.modal";
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

interface Iprops {
  itemData: any;
  itemTitle?: string;
  inputRef: any;
  isOpenModal: boolean;
  value: any;
  isOpenTitle: boolean;
  isOpenContents: boolean;
  itemContents: string;
  onChangeItemTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  updateItemContents: () => void;
  onChangeItemContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setIsOpenContents: Dispatch<SetStateAction<boolean>>;
  setIsOpenTitle: Dispatch<SetStateAction<boolean>>;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  onClickItemTitle: () => void;
  onClickItemContents: () => void;
  updateItemTitle: () => Promise<void>;
  onClickEnterToBoard: () => void;
  onClickDeleteItem: () => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export default function ItemDetailUI(props: Iprops) {
  const colorCode = props.value?.data()?.colorCode;
  return (
    <div>
      <Wrapper>
        {" "}
        {props.isOpenModal && (
          <Select
            content="아이템을 삭제하시겠습니까?"
            buttonNameLeft="예!"
            buttonNameRight="아니요?"
            onClickLeft={props.onClickDeleteItem}
            onClickRight={() => props.setIsOpenModal(false)}
          />
        )}
        <div style={{ opacity: "1" }}>
          <BackImg
            backColor={colorCode}
            color={`/images/${colorCode?.slice(1).concat(".jpeg")}`}
          />
          <InnerWrapper>
            <IconWrapper>
              <ArrowLeftIcon onClick={props.onClickEnterToBoard} />
              <DeleteIcon onClick={() => props.setIsOpenModal(true)} />
            </IconWrapper>
            <TitleWrapper>
              <Text>제목</Text>
              {props.isOpenTitle ? (
                <>
                  <DetailTitleInput
                    defaultValue={props.itemData?.itemTitle}
                    onChange={props.onChangeItemTitle}
                    ref={props.inputRef}
                    maxLength={22}
                    onKeyPress={props.onKeyPress}
                  />
                  <ConfirmTitleButton onClick={props.updateItemTitle}>
                    Okay
                  </ConfirmTitleButton>
                </>
              ) : (
                <DetailTitleDiv onClick={props.onClickItemTitle}>
                  {props.itemData?.itemTitle}
                </DetailTitleDiv>
              )}
            </TitleWrapper>
            <ContentWrapper>
              <Text>내용</Text>
              {props.isOpenContents ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <DetailContentsTextArea
                    placeholder="상세내용을 입력해주세요."
                    defaultValue={props.itemData?.itemContents}
                    ref={props.inputRef}
                    onChange={props.onChangeItemContents}
                  />
                  <ConfirmContentButton onClick={props.updateItemContents}>
                    Okay
                  </ConfirmContentButton>
                </div>
              ) : (
                <DetailContentsDiv
                  onClick={props.onClickItemContents}
                  defaultValue={props.itemContents}
                  readOnly
                />
              )}
            </ContentWrapper>
            <div>
              <Comments />
            </div>
          </InnerWrapper>
        </div>
      </Wrapper>
    </div>
  );
}
