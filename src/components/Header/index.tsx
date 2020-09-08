import React, { memo } from 'react'

import { Container, Wrapper, NavLeft, NavRight } from './styles'
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import AccountDropdown from '../AccountDropdown';

const Header: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<NavLeft>
					<BancoInter />
					Internet Banking
				</NavLeft>
				<NavRight>
					<Button 
					variant="secondary"
					>Simulador Renda fixa</Button>	
					<AccountDropdown />
				</NavRight>
			</Wrapper>
		</Container>
	)
}

export default memo(Header);