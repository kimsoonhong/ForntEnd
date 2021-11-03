import ItemDetail from "../../../../../src/components/unit/pengsooz/src/components/unit/itemDetail/itemDetail.container";
import { GlobalContext } from "../../../../_app";
import { useContext } from "react";
export default function ItemDetailPage() {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(false);
  return (
    <div>
      <ItemDetail />
    </div>
  );
}
