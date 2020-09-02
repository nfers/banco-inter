import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	height: 10.4rem;
	display: flex;
	background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
	max-width: 100rem;
`;