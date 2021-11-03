import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-height: calc(100vh - 350px) !important;
  min-height: 40px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  padding: 0 12px;
  margin-bottom: 12px;
  line-height: 36px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  background: ${(props) => props.color};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  position: relative;
  :active {
    top: 4px;
  }
`;
