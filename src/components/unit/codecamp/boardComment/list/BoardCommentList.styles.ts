import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../imgProject/src/commons/styles/media";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
  @media ${breakPoints.mobile} {
    /* background-color: red; */
    width: 100%;
    padding: 20px;
    margin-bottom: 5px;
    height: 100%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    /* background-color: seagreen; */
    margin-bottom: 20px;
  }
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60px;
  justify-content: space-between;
  /* background-color: violet; */
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Star = styled(Rate)`
  padding-left: 20px;

  display: block;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
