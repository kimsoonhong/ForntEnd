import {
  // ============Head============
  HeadWapper,
  HeadTitle,

  // ============Body============
  Category,
  BodyWapper,
  BodyRecipeImg,
  BodyTextDiv,
  BodyTextName,
  BodyTextBottom,
  BodyTextBottomCookingTime,
  BodyTextBottoomView,
  Icon,
  MediaDiv,
} from "./recipelist.styles";
import { NumberWithCommas } from "../../../commons/utils";

export default function RecipelistUI(props: any) {
  return (
    <>
      <HeadWapper>
        <HeadTitle>맛있는 요리</HeadTitle>
      </HeadWapper>
      <MediaDiv>
        <div>
          <Category>한식</Category>
          {props.recipelist?.map((data: any) => (
            <>
              {data.category === "korean" && (
                <BodyWapper onClick={props.onClickDetail(data)} key={data.id}>
                  <BodyRecipeImg src={data.picture} />
                  <BodyTextDiv>
                    <BodyTextName>{data.name}</BodyTextName>
                    <BodyTextBottom>
                      <BodyTextBottomCookingTime>
                        <Icon src="/images/list/time_gray@3x.png" />
                        {data.cookingTime} 분
                      </BodyTextBottomCookingTime>
                      <BodyTextBottoomView>
                        <Icon src="/images/list/eye.png" />
                        {NumberWithCommas(900)}
                      </BodyTextBottoomView>
                    </BodyTextBottom>
                  </BodyTextDiv>
                </BodyWapper>
              )}
            </>
          ))}
        </div>

        <div>
          <Category>일식</Category>
          {props.recipelist?.map((data: any) => (
            <>
              {data.category === "japanese" && (
                <BodyWapper onClick={props.onClickDetail(data)} key={data.id}>
                  <BodyRecipeImg src={data.picture} />
                  <BodyTextDiv>
                    <BodyTextName>{data.name}</BodyTextName>
                    <BodyTextBottom>
                      <BodyTextBottomCookingTime>
                        <Icon src="/images/list/time_gray@3x.png" />
                        {data.cookingTime} 분
                      </BodyTextBottomCookingTime>
                      <BodyTextBottoomView>
                        <Icon src="/images/list/eye.png" />
                        {NumberWithCommas(1600)}
                      </BodyTextBottoomView>
                    </BodyTextBottom>
                  </BodyTextDiv>
                </BodyWapper>
              )}
            </>
          ))}
        </div>
      </MediaDiv>
    </>
  );
}
