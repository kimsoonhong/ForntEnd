import styled from "@emotion/styled";
import { IProps } from "./recipedetail.type";
import { breakPoints } from "../../../commons/styles/media";

// ==========top=============
// ==========top=============
// ==========top=============

export const TopWapper = styled.div`
	position: relative;
	width: 100%;

	@media ${breakPoints.web} {
		width: 40%;
		margin: auto;
	}
`;
export const TopImg = styled.img`
	width: 100%;
`;
export const TopBackButton = styled.img`
	width: 28px;
	height: 28px;
	background-size: cover;
	background-position-x: center;
	background-position-y: center;

	position: absolute;
	top: 20px;
	left: 10px;

	@media ${breakPoints.web} {
		display: none;
	}
`;

// ============body===========
// ============body===========
// ============body===========

export const BodyWapper = styled.div`
	padding: 20px;

	padding-bottom: 100px;
	@media ${breakPoints.web} {
		width: 1200px;
		margin: auto;
	}
`;
export const BodyName = styled.div`
	font-size: var(--font-large);
	font-weight: var(--weight-bold);
	margin-bottom: 10px;
`;
export const Bodydescription = styled.div`
	color: var(--color-gray);
	font-size: var(--font-small);
	font-weight: var(--weight-semi-bold);

	margin-bottom: 30px;
`;
export const Bodyinformationdiv = styled.div`
	padding: 10px 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	border-top: 1px solid var(--color-gray);
	border-bottom: 1px solid var(--color-gray);
	margin-bottom: 30px;

	@media ${breakPoints.web} {
		margin: 40px 80px;
	}
`;
export const Bodyinformationtext = styled.div`
	color: var(--color-gray);
	font-size: var(--font-small);
	font-weight: var(--weight-semi-bold);
`;
export const Icon = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 8px;

	@media ${breakPoints.tablet} {
		width: 24px;
		height: 24px;
		margin-right: 12px;
	}
	@media ${breakPoints.web} {
		width: 36px;
		height: 36px;
		margin-right: 16px;
	}
`;

export const Bodyingredientsdiv = styled.div``;

export const BodyText = styled.div`
	font-size: var(--font-regular);
`;
export const Bodyspicesdiv = styled.div``;
export const BodyCookingStepsDiv = styled.div``;
export const CookingStepsInnerDiv = styled.div`
	display: flex;
	flex-direction: column;
	@media ${breakPoints.web} {
		margin: 40px 0;
	}
`;
export const BodyCookingStepsNo = styled.div`
	width: 20px;
	height: 20px;
	line-height: 20px;
	background-color: var(--color-yellow);
	text-align: center;
	font-size: var(--font-regular);
	font-weight: var(--weight-semi-bold);
	margin-bottom: 8px;
	border-radius: 4px;

	@media ${breakPoints.tablet} {
		width: 36px;
		height: 36px;
		line-height: 36px;
	}
	@media ${breakPoints.web} {
		width: 48px;
		height: 48px;
		line-height: 48px;
	}
`;
export const BodyCookingStepsText = styled.div`
	margin-bottom: 24px;
	font-size: var(--font-regular);
`;

// ============common============
// ============common============
// ============common============

export const Bodytitle = styled.div`
	font-size: var(--font-medium);
	font-weight: var(--weight-bold);
	margin: 20px 0;
	@media ${breakPoints.web} {
		margin: 60px 0;
	}
`;

export const InnerDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding: 5px 0;
	margin: 10px 0;
	@media ${breakPoints.web} {
		margin: 40px 0;
	}
`;

export const ArrowUP = styled.img`
	width: 28px;
	height: 28px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	border-radius: 50%;
	transform: rotate(90deg);
	transition: ease-in 0.2s all;
	background-color: var(--color-yellow);
	opacity: ${(props: IProps) => props.scrollY - 200};
	pointer-events: ${(props: IProps) =>
		props.scrollY >= 477 ? "auto" : "none"};

	@media ${breakPoints.tablet} {
		width: 32px;
		height: 32px;
		bottom: 28px;
		right: 28px;
		margin-right: 12px;
	}
	@media ${breakPoints.web} {
		width: 40px;
		height: 40px;
		bottom: 36px;
		right: 36px;
		margin-right: 16px;
	}
`;
