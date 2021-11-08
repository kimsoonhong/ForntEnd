import Project from "../../src/components/unit/imgProject/src/components/unit/project/project.container";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";
export default function ImgProject() {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(false);
  return <Project />;
}
