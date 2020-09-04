import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10.4rem;
	background: ${({ theme }) => theme.colors.greyLowerOpacity};
`;
