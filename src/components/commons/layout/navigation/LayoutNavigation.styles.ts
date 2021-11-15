import styled from "@emotion/styled";
import { breakPoints } from "../../../unit/imgProject/src/commons/styles/media";

export const Wrapper = styled.div`
  position: ${(props: any) => (props.scrollY >= 376 ? "" : "sticky")};
  top: 62px;
  width: 100%;

  height: 64px;
  background-image: url(/images/gc/a.png);
  background-size: cover;

  /* background-color: #2a652f; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  color: white;
  margin-bottom: 90px;

  padding: 0 20%;
  z-index: 12;
  /* min-width: 880px; */

  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;

interface Iprops {
  isClick: boolean;
}

export const MenuItem = styled.div`
  color: white;

  /* padding: 3px 24px; */
  /* background-color: aqua; */
  /* width: 101px;
  min-width: 100px; */
  text-align: center;
  border: 2px solid transparent;
  margin: auto;
  color: ${(props: Iprops) => (props.isClick ? "#84b96e" : "")};

  :hover {
    border-bottom: 2px solid white;
    box-sizing: unset;
    transition: all 400ms ease;
    cursor: pointer;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;
export const Ber = styled.div``;

// const Testdiv = styled.div`
//   color: ${Number(scrollY) > 200 ? "blue" : "green"};
// `;

export const Testdiv = styled.div`
  color: ${(props: any) => (props.scrollY < 200 ? "blue" : "red")};

  /* position: ; */
`;
