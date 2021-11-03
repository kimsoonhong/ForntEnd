import Workspace from "../../src/components/unit/pengsooz/src/components/unit/workspace/WorkSpace.container";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";
export default function LoginPage() {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(false);
  return (
    <div>
      <Workspace />
    </div>
  );
}
