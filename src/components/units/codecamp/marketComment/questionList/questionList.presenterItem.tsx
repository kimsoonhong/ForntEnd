import {
  DELETE_QUESTIONS,
  FETCH_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./questionList.querise";

import {
  Avatar,
  Contents,
  DateString,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  WriterWrapper,
  OptionWrapper,
  Writer,
} from "./questionList.styles";
import { EditOutlined, CloseOutlined, FormOutlined } from "@ant-design/icons";
import QuestionWrite from "../questionWrite/questionWrite.container";
import AnswerWrite from "../answerWrite/answerWrite.container";
import AnswerList from "../answerList/answerList.container";
import { Modal, Tooltip } from "antd";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function questionListUIItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const [isRecomment, setIsRecomment] = useState(false);
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_QUESTIONS);
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickOpenDeleteModal() {
    Modal.confirm({
      content: "댓글을 삭제 하시겠습니까?",
      onCancel: () => {
        Modal.info({ content: "취소되었습니다." });
      },
      onOk: async () => {
        try {
          await deleteUseditemQuestion({
            variables: { useditemQuestionId: props.data?._id },
            refetchQueries: [
              {
                query: FETCH_QUESTIONS,
                variables: { useditemId: router.query.useditemId },
              },
            ],
          });
          Modal.info({ content: "댓글을 삭제하였습니다." });
        } catch (error) {
          Modal.error({ content: error.message });
        }
      },
    });
  }

  function onClickUpdate() {
    if (isEdit === false) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }

    // setIsRecomment(false);
  }

  function onClickRecomment() {
    setIsRecomment(true);

    if (isRecomment === false) {
      setIsRecomment(true);
    } else {
      setIsRecomment(false);
    }
    // setIsEdit(false);
  }

  return (
    <div>
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/images/avatar.png" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.data.user.name}</Writer>
              </WriterWrapper>
              <Contents>{props.data.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <Tooltip placement="top" title={"댓글달기"}>
                <FormOutlined
                  onClick={onClickRecomment}
                  style={{ fontSize: "20px" }}
                />
              </Tooltip>
              {props.data?.user._id !== userData?.fetchUserLoggedIn._id ? (
                <></>
              ) : (
                <>
                  <Tooltip placement="top" title={"수정하기"}>
                    <EditOutlined
                      onClick={onClickUpdate}
                      style={{ fontSize: "20px" }}
                    />{" "}
                  </Tooltip>
                  <Tooltip placement="top" title={"삭제하기"}>
                    <CloseOutlined
                      onClick={onClickOpenDeleteModal}
                      style={{ fontSize: "20px", color: "red" }}
                    />{" "}
                  </Tooltip>
                </>
              )}
            </OptionWrapper>
          </FlexWrapper>
          <DateString> {String(props.data.createdAt).slice(0, 10)}</DateString>
        </ItemWrapper>
      )}
      {isEdit && (
        <Tooltip placement="top" title={"대댓글작성"}>
          <QuestionWrite
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            data={props.data}
          />
        </Tooltip>
      )}
      {isRecomment && (
        <Tooltip placement="top" title={"댓글달기"}>
          <AnswerWrite
            data={props.data}
            setIsRecomment={setIsRecomment}
            questionData={props.data?._id}
            onClickRecomment={onClickRecomment}
          />
        </Tooltip>
      )}

      <AnswerList data={props.data} onClickUpdate={onClickUpdate} />
    </div>
  );
}
