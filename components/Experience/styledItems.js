import styled from 'styled-components';

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledLink = styled.a`
	position: relative;
	display: inline-block;
	color: ${(props) => props.inputColor};
	font-family: Calibre;
	&:before {
		content: '';
		position: absolute;
		width: 0;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: ${(props) => props.inputColor};
		visibility: 'hidden';
		transition: all 0.3s ease-in-out;
	}
	&:hover::before {
		visibility: visible;
		width: 100%;
	}
`;
