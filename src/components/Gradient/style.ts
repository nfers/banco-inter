import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	height: 6.4rem;
		background: ${({ theme }) => 
		`linear-gradient(90deg, ${theme.colors.primary} 0%, #FF8700 100%)`};
	`; 