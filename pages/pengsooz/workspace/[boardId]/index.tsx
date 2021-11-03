import Board from "../../../../src/components/unit/pengsooz/src/components/unit/board/board.container";
import { GlobalContext } from "../../../_app";
import { useContext } from "react";
export default function BoardPage() {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(false);
  return (
    <div>
      <Board />
    </div>
  );
}
