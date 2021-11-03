import LoginUI from "./login.presenter";
import firebase from "../../../commons/firebase/firebase";
import { useRouter } from "next/router";

export default function Login() {
  const uiConfig = {
    signInSuccessUrl: "/workspace",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };
  const router = useRouter();
  const onClickRouter = () => {
    router.push("/workspace");
  };
  return (
    <div>
      <LoginUI
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
        onClickRouter={onClickRouter}
      />
    </div>
  );
}
