import styled from "@emotion/styled";
import { EnterOutlined } from "@ant-design/icons";
import breakPoints from "../../../../commons/media/media";

export const CommentsWriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const CommentTitle = styled.div`
  width: 100%;
  margin-bottom: 12px;
  font-family: "Oboksanghoe_B";

  @media ${breakPoints.web} {
    font-size: 20px;
    margin-top: 20px;
  }
`;
export const CommentsInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 32px;
  line-height: 32px;
  text-align: center;
  vertical-align: center;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;
export const CommentContentsInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
`;
export const EnterIcon = styled(EnterOutlined)`
  height: 32px;
  padding: 0 6px;
  font-size: 20px;
  line-height: 38px;
  text-align: center;
  vertical-align: center;
  background: ${(props) => props.color};
`;
