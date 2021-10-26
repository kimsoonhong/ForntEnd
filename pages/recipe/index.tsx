import Recipelist from "../../src/components/units/recipe/src/components/unit/recipeList/recipelist.container";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";

export default function Recipelistpage() {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(false);

  return (
    <div>
      <Recipelist />
    </div>
  );
}
