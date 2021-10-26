import Login from "../../src/components/units/codecamp/login/LoginPage/login.container";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";
export default function login() {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(true);
  return <Login />;
}
