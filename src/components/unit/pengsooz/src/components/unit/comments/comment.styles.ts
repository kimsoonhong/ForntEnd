import styled from "@emotion/styled";
import breakPoints from "../../../commons/media/media";

export const Wrapper = styled.div`
  position: relative;
  padding-top: 6px;

  @media ${breakPoints.web} {
  }
`;
export const CommentTitle = styled.div`
  width: 100%;
  font-family: "Oboksanghoe_B";

  @media ${breakPoints.web} {
    font-size: 25px;
    margin-bottom: 20px;
  }
`;
export const SubWrapper = styled.div`
  width: 100%;
  height: 240px;
  padding-top: 10px;
  overflow: auto;

  @media ${breakPoints.tablet} {
    height: 300px;
    padding: 0px 10px;
  }
  @media ${breakPoints.web} {
    min-height: 70px;
    height: 70%;
    padding: 0px 20px;
  }
`;
