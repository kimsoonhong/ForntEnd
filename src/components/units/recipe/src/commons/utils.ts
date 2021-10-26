// ====================Notice================
// 숫자에 1,000 단위로 콤마를 찍어주는 정규식
// ====================Notice================
export const NumberWithCommas = (ViewPoint: number) => {
	return ViewPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
