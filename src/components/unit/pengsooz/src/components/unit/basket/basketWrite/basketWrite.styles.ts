import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 330px;
  scroll-snap-align: center;
`;
export const SubWrapper = styled.div`
  scroll-snap-type: x mandatory;
  width: 330px;
`;
export const AddWrapper = styled.div`
  width: 100%;
  scroll-snap-align: center;
`;
export const BasketCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;
export const BasketCreateInput = styled.input`
  width: 100%;
  height: 36px;
  padding-left: 8px;
  outline: none;
  border-color: whitesmoke;
`;
export const BasketCreateBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 12px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  padding: 12px;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;
export const AddBasket = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  scroll-snap-align: center;
  cursor: pointer;
  position: relative;
  :active {
    top: 4px;
  }
`;
