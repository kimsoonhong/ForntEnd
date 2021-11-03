import styled from "@emotion/styled";

import SmallButton from "../button/small.Button";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  top: 0;
  left: 0;
  background: rgba(83, 61, 61, 0.4);
  backdrop-filter: blur(2px);
  position: fixed;
`;
const InnerWrapper = styled.div`
  background-color: #fcf9ee;
  width: 280px;
  height: 120px;
  padding: 12px;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Content = styled.div`
  text-align: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

interface ISelectorModalProps {
  onClickLeft: () => void;
  onClickRight: () => void;

  buttonNameLeft: string;
  buttonNameRight: string;
  content: string;
}

const Select = (props: ISelectorModalProps) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Content>{props.content}</Content>
        <ButtonWrapper>
          <SmallButton
            buttonName={props.buttonNameLeft}
            onClick={props.onClickLeft}
          />
          <SmallButton
            buttonName={props.buttonNameRight}
            onClick={props.onClickRight}
          />
        </ButtonWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Select;
