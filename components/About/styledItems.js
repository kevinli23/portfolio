import styled from 'styled-components';

export const Container = styled.div`
	margin: 20px;
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
