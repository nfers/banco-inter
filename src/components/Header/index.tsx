import React from 'react'
import { Container, Wrapper } from './styles'
import { BancoInter } from '../../assets/images';

const Header: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<BancoInter />
			</Wrapper>
			</Container>
	)
}

export default Header;