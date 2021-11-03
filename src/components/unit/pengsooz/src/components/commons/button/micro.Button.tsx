import styled from "@emotion/styled";

const Button = styled.div`
  width: 88px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  color: #1c1c1c;
  background-color: #e2e1d7;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  :active {
    top: 4px;
  }
`;

interface IMicroButtonProps {
  onClick: () => void;
  buttonName: string;
}

const MicroButton = (props: IMicroButtonProps) => {
  return <Button onClick={props.onClick}>{props.buttonName}</Button>;
};

export default MicroButton;
