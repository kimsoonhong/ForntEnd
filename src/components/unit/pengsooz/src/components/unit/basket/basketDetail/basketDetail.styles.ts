import styled from "@emotion/styled";

export const ScrollSnapWrapper = styled.div`
  scroll-snap-type: x mandatory;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  padding: 12px;
  margin-right: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  scroll-snap-align: center;
`;
export const BasketEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.color};
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;
export const BasketEditInput = styled.input`
  width: 100%;
  height: 36px;
  padding-left: 8px;
  outline: none;
  border-color: whitesmoke;
`;
export const BasketEditBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 12px;
`;
export const BasketInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`;
export const BasketTitle = styled.div`
  width: 100%;
  padding-left: 8px;
  font-size: 20px;
  font-weight: 400;
`;
export const BasketMenu = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
`;
