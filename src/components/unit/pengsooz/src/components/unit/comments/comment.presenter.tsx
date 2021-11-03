import CommentsDetail from "./commentsDetail/commentsDetail.container";
import CommentsWrite from "./commentsWrite/commentsWrite.container";
import { Wrapper, SubWrapper, CommentTitle } from "./comment.styles";
import { useEffect, useRef } from "react";
import firebase from "../../../commons/firebase/firebase";

interface ICommentUI {
  value: any;
  loading: boolean;
  error: firebase.FirebaseError | undefined;
  itemId?: any;
  user: firebase.User | null | undefined;
}

export default function CommentUI(props: ICommentUI) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [props.value?.docs]);

  return (
    <Wrapper>
      <CommentTitle>댓글</CommentTitle>
      <SubWrapper>
        {props.error && <strong>Error: {JSON.stringify(props.error)}</strong>}
        {props.loading && <span>Collection: Loading...</span>}
        {props.value &&
          props.value.docs.map((doc: any) => (
            <>
              <div key={doc.id}>
                <CommentsDetail
                  value={doc}
                  itemId={props.itemId}
                  user={props.user}
                />
              </div>
              <div ref={messagesEndRef} />
            </>
          ))}
      </SubWrapper>
      <CommentsWrite itemId={props.itemId} user={props.user} />
    </Wrapper>
  );
}
