import RecipelistUI from "./recipelist.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Loadingpage from "../../commons/loadingpage.presenter";

export default function RecipelistContainer() {
  const router = useRouter();
  const [recipelist, setRecipelist] = useState<any[] | undefined>();

  // ============Notince============
  // axios를 활용하여 rest api 데이터와 통신 하였으며, try/catch를 통해 try블록에서 에러가 발생하였을때의 예외처리함
  // ============Notince============
  useEffect(() => {
    const RecipeEffect = async () => {
      try {
        const getRecipeList: any = await axios.get(
          "https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe"
        );
        setRecipelist(getRecipeList.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    RecipeEffect();
  }, []);

  // ============Notince============
  // HOF를 활용하여 데이터를 받아와  해당 Div 의 ID를 불러 왔으며 , 이아이디를 다이나믹 라우팅으로 실행함
  // ============Notince============

  const onClickDetail = (data: any) => () => {
    router.push(`/recipe/${data.id}`);
  };

  // ============Notince============
  // list를 내림 차순으로 정렬 시켜주는 함수
  // ============Notince============
  recipelist?.sort((a: any, b: any) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  return (
    <>
      {recipelist ? (
        <RecipelistUI recipelist={recipelist} onClickDetail={onClickDetail} />
      ) : (
        <Loadingpage />
      )}
    </>
  );
}
