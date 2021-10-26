import RecipedetailUI from "../recipeDetail/recipedetail.presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loadingpage from "../../commons/loadingpage.presenter";

export default function Recipedetail() {
  const router = useRouter();
  const [recipeDetailData, setRecipeDate] = useState();
  const [scrollY, setScrollY] = useState(0);

  // ============Notince============
  // axios를 활용하여 rest api 데이터와 통신 하였으며, try/catch를 통해 try블록에서 에러가 발생하였을때의 예외처리함
  // ============Notince============
  useEffect(() => {
    const RecipeEffect = async () => {
      try {
        const recipeID = router.query.recipeDetail;
        const getRecipeList: any = await axios.get(
          `https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe/${recipeID}`
        );
        setRecipeDate(getRecipeList);
      } catch (error) {
        console.log(error.message);
      }
    };
    RecipeEffect();
  }, [router]);

  // ============Notince============
  // arrowUP을 위한 ScrollY 리스너
  // ============Notince============
  const listener = () => {
    setScrollY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 1);
  };
  // ============Notince============
  // 뒤로가기 버튼 router
  // ============Notince============
  const onClickBack = () => {
    router.push(`/`);
  };

  return (
    <>
      {recipeDetailData ? (
        <RecipedetailUI
          recipeDetailData={recipeDetailData}
          scrollY={scrollY}
          scrollToTop={scrollToTop}
          onClickBack={onClickBack}
        />
      ) : (
        <Loadingpage />
      )}
    </>
  );
}
