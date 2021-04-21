import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 0%;
	left: 5%;
`;

export const Line = styled.div`
	border-right: 1px solid black;
	min-height: ${(props) => props.height}px;
	margin-top: 10px;
	width: 50%;
`;
