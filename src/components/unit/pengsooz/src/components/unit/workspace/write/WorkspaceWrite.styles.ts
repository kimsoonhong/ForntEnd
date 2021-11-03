import styled from "@emotion/styled";
import { PlusCircleOutlined } from "@ant-design/icons";
import breakPoints from "../../../../commons/media/media";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border: 2px dotted #707070;
  border-radius: 10%;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 270px;
    border: 2px dotted #707070;
    border-radius: 10%;
    cursor: pointer;
    position: relative;
    :active {
      top: 4px;
    }
  }
  @media ${breakPoints.web} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 270px;
    border: 2px dotted #707070;
    border-radius: 10%;
    cursor: pointer;
    position: relative;
    :active {
      top: 4px;
    }
  }
`;
export const PlusIcon = styled(PlusCircleOutlined)`
  color: #707070;
  font-size: 30px;

  @media ${breakPoints.tablet} {
    color: #707070;
    font-size: 30px;
  }
  @media ${breakPoints.web} {
    color: #707070;
    font-size: 30px;
  }
`;
