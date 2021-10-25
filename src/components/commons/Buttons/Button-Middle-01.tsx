import styled from "@emotion/styled";

const MyBtn = styled.button`
  width: 180px;
  height: 52px;
  background-color: #2a652f;
  color: white;
  font-weight: bolder;
  margin: 0px;
  font-size: 16px;
  font-weight: 500;

  :hover {
    background-color: #142b12;
    transition: ease-in 200ms all;
  }
`;

export default function button01(props: any) {
  return (
    // @ts-ignore
    <MyBtn type={props.type} isActive={props.isActive} onClick={props.onClick}>
      {props.buttonName}
    </MyBtn>
  );
}
