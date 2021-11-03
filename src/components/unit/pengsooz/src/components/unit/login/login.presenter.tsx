import { Wrapper, Title, MainImg } from "./login.styles";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

interface Iprops {
  uiConfig: { signInSuccessUrl: string; signInOptions: string[] };
  firebaseAuth: any;
  onClickRouter: any;
}

export default function LoginUI(props: Iprops) {
  return (
    <Wrapper>
      <MainImg src="/images/loading.gif" />
      <Title onClick={props.onClickRouter}>PENGLELLO</Title>
      <StyledFirebaseAuth
        uiConfig={props.uiConfig}
        firebaseAuth={props.firebaseAuth}
      />
    </Wrapper>
  );
}
