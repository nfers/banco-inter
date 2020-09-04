import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	height: 10.4rem;
	display: flex;
	background: ${({ theme }) => theme.colors.background};
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 100rem;
  height: 10.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


export const NavLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	
  > svg {
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 0.4rem -0.4rem;
	}
	
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
`;

export const NavRight = styled.div`

`;