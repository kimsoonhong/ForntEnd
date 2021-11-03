import styled from "@emotion/styled";

const Button = styled.div`
  width: 122px;
  height: 36px;
  line-height: 36px;
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

interface ISmallButtonProps {
  onClick: () => void;
  buttonName: string;
}

const SmallButton = (props: ISmallButtonProps) => {
  return <Button onClick={props.onClick}>{props.buttonName}</Button>;
};

export default SmallButton;
