import styled from "@emotion/styled";
import { breakPoints } from "../../../imgProject/src/commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  /* padding: 0 20%; */

  /* background-color: red; */
  @media ${breakPoints.mobile} {
    font-size: 1px;
  }
`;
export const InnerWrapper = styled.div`
  width: 70%;
  /* margin: 800px; */
  margin: auto;
  /* background-color: aqua; */

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;
export const TableTop = styled.div`
  border-top: 2px solid gray;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: #2a653f;
    background-color: whitesmoke;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
  @media ${breakPoints.mobile} {
    width: 50px;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 40%;
  text-align: center;
  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
  @media ${breakPoints.mobile} {
    width: 50px;
    /* background-color: red; */
    text-overflow: ellipsis;
  }
`;

export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: #2a653f;
    background-color: whitesmoke;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* background-color: antiquewhite; */
  padding-top: 50px;
  @media ${breakPoints.mobile} {
    /* background-color: red; */
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  border: 2px solid #142b12;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: whitesmoke;
    font-weight: bold;
    animation: all 3000ms ease-in;
  }

  @media ${breakPoints.mobile} {
    /* background-color: red; */
    margin: auto;
    margin-top: 20px;
  }
`;

export const WrapperList = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  /* width: 50px; */
`;

export const Page = styled.div`
  margin: 0px 15px;

  font-size: 22px;
  width: 20px;
  text-align: center;
  font-weight: ${(props: any) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: any) => (props.isActive ? "" : "pointer")};
  color: ${(props: any) => (props.isActive ? "#84b96e" : "")};
  /* background-color: red; */

  :hover {
    font-weight: bold;
    animation: all 3000ms ease-in;
  }

  @media ${breakPoints.mobile} {
    /* background-color: royalblue; */
    font-size: 12px;
    margin: 1px;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  /* background-color: red; */
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: end;

  @media ${breakPoints.mobile} {
    /* background-color: red; */
  }
`;
export const SearchInput = styled.input`
  width: 200px;
  height: 52px;
  padding-left: 16px;
  border: none;
  font-size: 20px;
  border-bottom: 2px gray solid;
  /* text-align: center; */
  flood-color: gray;
  /* margin-left: 80%; */
  @media ${breakPoints.mobile} {
    /* background-color: red; */
    width: 100px;
    font-size: 10px;
    height: 20px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 40px;
  display: none;
`;
