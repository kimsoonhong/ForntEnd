import MarketList from "../../src/components/units/codecamp/market/list/MarketList.container";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";
export default function market() {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(true);
  return <MarketList />;
}
