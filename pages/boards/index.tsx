import BoardList from "../../src/components/units/codecamp/board/list/BoardList.container";
// import Layout from "../../src/components/commons/layout";
// import layout from "../../src/components/commons/layout";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";

export default function BoardsPage() {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(true);

  return (
    // <layout>
    <BoardList />
    // </layout>
  );
}
