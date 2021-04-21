import styled from 'styled-components';

export const LandingMain = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: ${(props) => props.font};
	background-image: url('${(props) => props.bgImage}');
	background-repeat: no-repeat;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;
