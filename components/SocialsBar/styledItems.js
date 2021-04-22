import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	bottom: 0%;
	left: 5%;
	z-index: 1;
`;

export const Line = styled.div`
	border-right: 1px solid ${(props) => props.color};
	min-height: ${(props) => props.height}px;
	margin-top: 10px;
	width: 50%;
`;
