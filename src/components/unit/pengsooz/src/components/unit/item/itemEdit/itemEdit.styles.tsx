import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;
export const ItemContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  line-height: 36px;
  border-radius: 4px;
  background: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;
export const ItemCreateInput = styled.input`
  width: 100%;
  height: 36px;
  padding-left: 8px;
  outline: none;
  border-color: whitesmoke;
`;
export const ItemCreateBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 12px;
`;
export const AddItem = styled.div`
  width: 100%;
  height: 96px;
  line-height: 82px;
  padding-top: 12px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`;
