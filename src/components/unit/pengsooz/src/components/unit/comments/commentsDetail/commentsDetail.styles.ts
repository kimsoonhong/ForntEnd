import styled from "@emotion/styled";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import breakPoints from "../../../../commons/media/media";
export const Wrapper = styled.div`
  width: 100%;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CommentsListWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  margin-top: 2px;
  @media ${breakPoints.tablet} {
    height: 50px;
  }
  @media ${breakPoints.web} {
    height: 50px;
    margin-bottom: 20px;
  }
`;
export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  @media ${breakPoints.tablet} {
    width: 40px;
    height: 40px;
  }
  @media ${breakPoints.web} {
    width: 40px;
    height: 40px;
  }
`;
export const CommentsInnerWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media ${breakPoints.tablet} {
    height: 50px;
  }
  @media ${breakPoints.web} {
    height: 50px;
  }
`;
export const CommentEdit = styled.input`
  height: 20px;
  padding: 0 5px;
  font-size: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  @media ${breakPoints.tablet} {
    font-size: 12px;
    height: 24px;
    line-height: 24px;
  }
  @media ${breakPoints.web} {
    font-size: 20px;
    height: 24px;
    line-height: 24px;
  }
`;
export const DispalayName = styled.div`
  height: 20px;
  font-size: 10px;
  line-height: 20px;

  @media ${breakPoints.tablet} {
    font-size: 12px;
    margin-bottom: 4px;
  }
  @media ${breakPoints.web} {
    font-size: 18px;
    margin-bottom: 4px;
  }
`;
export const CommentContents = styled.div`
  height: 20px;
  padding: 0 5px;
  font-size: 10px;
  text-align: center;
  line-height: 20px;
  background: ${(props) => props.color};
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media ${breakPoints.tablet} {
    font-size: 12px;
    height: 24px;
    line-height: 24px;
  }
  @media ${breakPoints.web} {
    font-size: 16px;
    height: 38px;
    line-height: 32px;
  }
`;
export const CommentUpdateButton = styled(EditOutlined)`
  align-self: flex-end;
  font-size: 12px;
  margin-bottom: 2px;
  @media ${breakPoints.tablet} {
    font-size: 20px;
    line-height: 30px;
  }
  @media ${breakPoints.web} {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const CommentDeleteButton = styled(DeleteOutlined)`
  align-self: flex-end;
  font-size: 12px;
  margin-bottom: 2px;
  margin-left: 5px;
  @media ${breakPoints.tablet} {
    font-size: 20px;
    line-height: 30px;
  }
  @media ${breakPoints.web} {
    font-size: 20px;
    line-height: 30px;
  }
`;
