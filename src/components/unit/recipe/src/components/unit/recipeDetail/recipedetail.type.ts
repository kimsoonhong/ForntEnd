export interface IRecipedetail {}

export interface IRecipedetailUI {
  recipeDetailData: any;
  scrollY: number;
  scrollToTop: () => void;
  onClickBack: () => void;
}

export interface IProps {
  scrollY?: number | any;
}
