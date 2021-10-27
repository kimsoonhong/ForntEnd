import styled from "@emotion/styled";
import { useState } from "react";
import { breakPoints } from "../../commons/styles/media";

const CheckBoxImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
	/* border-radius: 2px; */

	@media ${breakPoints.tablet} {
		width: 36px;
		height: 36px;
		margin-right: 16px;
	}

	@media ${breakPoints.web} {
		width: 44px;
		height: 44px;
		margin-right: 24px;
	}
`;

const CheckBoxDiv = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 8px;

	border-radius: 4px;
	border: gray 1px solid;

	@media ${breakPoints.tablet} {
		width: 36px;
		height: 36px;
		margin-right: 16px;
	}

	@media ${breakPoints.web} {
		width: 44px;
		height: 44px;
		margin-right: 24px;
	}
`;

export default function Checkbox() {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<>
			{!isChecked ? (
				<CheckBoxDiv onClick={() => setIsChecked(true)} />
			) : (
				<CheckBoxImg
					src="/images/detail/check_full@3x.png"
					onClick={() => setIsChecked(false)}
				/>
			)}
		</>
	);
}
