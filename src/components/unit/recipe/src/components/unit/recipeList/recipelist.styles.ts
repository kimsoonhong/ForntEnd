import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

// ============Head============
// ============Head============
// ============Head============
export const HeadWapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: var(--color-yellow);
  display: flex;
  flex-direction: column;
  justify-content: end;

  @media ${breakPoints.tablet} {
    height: 160px;
  }
  @media ${breakPoints.web} {
    height: 200px;
  }
`;
export const HeadTitle = styled.div`
  font-size: var(--font-large);
  font-weight: var(--weight-bold);
  padding-left: 20px;
  /* padding-bottom: 20px; */
`;

export const HeadContent = styled.div`
  font-size: var(--font-small);

  padding-bottom: 20px;
  padding-left: 20px;
`;

export const Category = styled.div`
  font-size: var(--font-small);
  background-color: var(--color-light-gray);
  padding: 4px 10px;

  font-weight: var(--weight-bold);
`;

// ============Body============
// ============Body============
// ============Body============
export const BodyWapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid var(--color-light-gray);
  @media ${breakPoints.web} {
    margin-right: 50px;
    cursor: pointer;
    ::active {
      position: relative;
      top: -20;
    }
  }
`;
export const BodyRecipeImg = styled.img`
  width: 108px;
  height: 80px;
  min-width: 108px;
  border-radius: 12px;

  @media ${breakPoints.tablet} {
    width: 160px;
    height: 112px;
    margin-right: 10px;
  }
  @media ${breakPoints.web} {
    width: 240px;
    height: 140px;
    margin-right: 10px;
  }
`;
export const BodyTextDiv = styled.div`
  padding: 10px;
  padding-right: 0px;
`;
export const BodyTextName = styled.div`
  font-size: var(--font-regular);
  font-weight: 600;

  padding-bottom: 8px;
`;
export const BodyTextBottom = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BodyTextBottomCookingTime = styled.div`
  color: var(--color-gray);
  font-size: var(--font-small);
  font-weight: var(--weight-semi-bold);
  margin-right: 16px;
`;
export const BodyTextBottoomView = styled.div`
  color: var(--color-gray);
  font-size: var(--font-small);
  font-weight: var(--weight-semi-bold);
`;
export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
export const MediaDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakPoints.web} {
    flex-direction: row;
  }
`;
