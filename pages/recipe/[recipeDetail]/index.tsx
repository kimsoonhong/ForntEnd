import Recipedetail from "../../../src/components/unit/recipe/src/components/unit/recipeDetail/recipedetail.container";
import Head from "next/head";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../../pages/_app";

interface Iprops {
  name: string;
  description: string;
  picture: string;
  recipelist: any;
}

export default function recipeDetailPage(props: Iprops) {
  const { setIsLayout } = useContext(GlobalContext);
  setIsLayout(false);
  return (
    <>
      <Head>
        <meta property="og:title" content={props.recipelist.name} />
        <meta property="og:contents" content={props.recipelist.description} />
        <meta property="og:images" content={`${props.recipelist.picture}`} />
      </Head>
      <Recipedetail />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  let recipelist = [];
  try {
    const recipeID = context.query.recipeDetail;
    const getRecipeList: any = await axios.get(
      `https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe/${recipeID}`
    );
    recipelist = getRecipeList.data;
  } catch (error) {
    console.log(error.message);
  }

  return { props: { recipelist } };
};
