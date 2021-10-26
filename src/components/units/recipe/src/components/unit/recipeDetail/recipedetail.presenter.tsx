import {
  // ==========top=============
  TopWapper,
  TopImg,
  TopBackButton,
  // ============body===========
  BodyWapper,
  BodyName,
  Bodydescription,
  Bodyinformationdiv,
  Bodyinformationtext,
  Bodyingredientsdiv,
  Bodyspicesdiv,
  BodyCookingStepsDiv,
  CookingStepsInnerDiv,
  BodyCookingStepsNo,
  BodyCookingStepsText,

  // ============common============
  Bodytitle,
  InnerDiv,
  BodyText,
  ArrowUP,
  Icon,
} from "../recipeDetail/recipedetail.styles";
import Checkbox from "../../commons/checkbox";
import { IRecipedetailUI } from "./recipedetail.type";

export default function RecipedetailUI(props: IRecipedetailUI) {
  return (
    <>
      <TopWapper>
        <TopImg src={props.recipeDetailData?.data.picture} />
        <TopBackButton
          src="/images/detail/back@3x.png"
          onClick={props.onClickBack}
        ></TopBackButton>
      </TopWapper>
      <BodyWapper>
        <BodyName>{props.recipeDetailData?.data.name}</BodyName>
        <Bodydescription>
          {props.recipeDetailData?.data.description}
        </Bodydescription>

        <Bodyinformationdiv>
          <Bodyinformationtext>
            <Icon src="/images/detail/time@3x.png" />
            {props.recipeDetailData?.data.cookingTime} 분
          </Bodyinformationtext>
          <Bodyinformationtext>
            <Icon src="/images/detail/serving@3x.png" />
            {props.recipeDetailData?.data.servings}인분
          </Bodyinformationtext>
          <Bodyinformationtext>
            {" "}
            <Icon src="/images/detail/kcal.png" />
            {props.recipeDetailData?.data.kcal} kcal
          </Bodyinformationtext>
        </Bodyinformationdiv>

        <Bodyingredientsdiv>
          <Bodytitle>재료</Bodytitle>

          {props.recipeDetailData?.data.ingredients.map((data: any) => (
            <InnerDiv key={data.id}>
              <Checkbox />
              <BodyText>{data}</BodyText>
            </InnerDiv>
          ))}
        </Bodyingredientsdiv>

        <Bodyspicesdiv>
          <Bodytitle>양념장</Bodytitle>

          {props.recipeDetailData?.data.spices.map((data: any) => (
            <InnerDiv key={data.id}>
              <Checkbox />
              <BodyText>{data}</BodyText>
            </InnerDiv>
          ))}
        </Bodyspicesdiv>

        <BodyCookingStepsDiv>
          <Bodytitle>만들어봅시다!</Bodytitle>

          {props.recipeDetailData?.data.cookingSteps.map(
            (data: any, index: any) => (
              <CookingStepsInnerDiv key={data.id}>
                <BodyCookingStepsNo>{index + 1}</BodyCookingStepsNo>
                <BodyCookingStepsText>{data}</BodyCookingStepsText>
              </CookingStepsInnerDiv>
            )
          )}
        </BodyCookingStepsDiv>
        <ArrowUP
          src="/images/detail/back@3x.png"
          scrollY={props.scrollY}
          onClick={props.scrollToTop}
        />
      </BodyWapper>
    </>
  );
}
