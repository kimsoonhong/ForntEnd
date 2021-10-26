import styled from "@emotion/styled";

const Wapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: var(--color-yellow);
`;

const LoadingImg = styled.img`
	width: 30%;

	position: absolute;
	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);
`;

const Text = styled.div`
	font-size: var(--font-large);

	position: absolute;
	top: 80%;
	left: 50%;

	transform: translate(-50%, -50%);
`;

export default function Loadingpage() {
	return (
		<Wapper>
			<LoadingImg src="/images/loading/loading2.png" />
			<Text>잠시만 기다려주세요!</Text>
		</Wapper>
	);
}
