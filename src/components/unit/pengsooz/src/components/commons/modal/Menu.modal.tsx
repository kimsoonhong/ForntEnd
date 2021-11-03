import styled from "@emotion/styled";
import LargeButton from "../button/large.Button";

interface IMenuModalProps {
  buttonNameTop: string;
  buttonNameBottom: string;
  onClickTop: () => void;
  onClickBottom: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 184px;
  height: 108px;
  padding: 12px;
  background-color: #fcf9ee;
`;

export default function MenuModal(props: IMenuModalProps) {
  return (
    <Wrapper>
      <LargeButton
        buttonName={props.buttonNameTop}
        onClick={props.onClickTop}
      />

      <LargeButton
        buttonName={props.buttonNameBottom}
        onClick={props.onClickBottom}
      />
    </Wrapper>
  );
}
