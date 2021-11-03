import styled from "@emotion/styled";
import breakPoints from "../../../commons/media/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 18px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100vh;
    padding: 18px;
  }
  @media ${breakPoints.web} {
    width: 1500px;
    padding: 18px;
    margin: auto;
  }
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 132px;
  margin: auto;
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 172px;
    padding: 0 56px;
  }
  @media ${breakPoints.web} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 172px;
    margin: auto;
  }
`;
export const LogoutButton = styled.button`
  align-self: flex-end;
  width: 90px;
  height: 32px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 32px;
  background-color: #e2e1d7;
  @media ${breakPoints.tablet} {
    align-self: center;
    width: 200px;
    height: 64px;
    border-radius: 8px;
    font-size: 24px;
    background-color: #e2e1d7;
  }
  @media ${breakPoints.web} {
    align-self: center;
    width: 200px;
    height: 64px;
    border-radius: 8px;
    font-size: 24px;
    background-color: #e2e1d7;
  }
`;
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: flex-start;
    width: 80%;
    height: 140px;
    transform: translateY(20px);
  }
  @media ${breakPoints.web} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 140px;
  }
`;
export const Photo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media ${breakPoints.tablet} {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  @media ${breakPoints.web} {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
export const TextWrapper = styled.div`
  width: 100%;
  padding-left: 30px;
  @media ${breakPoints.tablet} {
    width: 50%;
    padding-left: 30px;
  }
  @media ${breakPoints.web} {
    width: 600px;
  }
`;
export const DisplayName = styled.div`
  height: 28px;
  margin-bottom: 5px;
  font-family: "Oboksanghoe_B";
  font-size: 28px;
  line-height: 28px;
  color: #1c1c1c;
  @media ${breakPoints.tablet} {
    height: 36px;
    margin-bottom: 5px;
    font-family: "Oboksanghoe_B";
    line-height: 28px;
    color: #1c1c1c;
    font-size: 36px;
  }
  @media ${breakPoints.web} {
    height: 28px;
    margin-bottom: 5px;
    font-family: "Oboksanghoe_B";
    font-size: 28px;
    line-height: 28px;
    color: #1c1c1c;
  }
`;
export const Email = styled.div`
  height: 24px;
  font-family: "Oboksanghoe_L";
  font-size: 12px;
  line-height: 24px;
  color: #707070;
  @media ${breakPoints.tablet} {
    height: 24px;
    font-family: "Oboksanghoe_L";
    font-size: 18px;
    line-height: 24px;
    color: #707070;
  }
  @media ${breakPoints.web} {
    height: 24px;
    font-family: "Oboksanghoe_L";
    font-size: 18px;
    line-height: 24px;
    color: #707070;
  }
`;
export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px;
  }
  @media ${breakPoints.web} {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 0 0 0;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
  @media ${breakPoints.tablet} {
    font-size: 32px;
    padding-left: 12px;
    padding-bottom: 40px;
  }
  @media ${breakPoints.web} {
    font-size: 32px;
    padding-bottom: 40px;
    width: 200px;
  }
`;
export const BoardsWrapper = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  grid-gap: 18px;
  overflow: scroll;
  height: 437px;
  padding-bottom: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    grid-gap: 18px;
    overflow: scroll;
    height: 968px;
    padding-left: 12px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${breakPoints.web} {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    grid-gap: 18px;
    overflow: scroll;
    height: 100vh;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
