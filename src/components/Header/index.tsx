import React, { memo } from 'react'

import { Container, Wrapper, NavLeft, NavRight } from './styles'
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import AccountDropdown from '../AccountDropdown';
import { User } from '../Header/Header';

const Header: React.FC = () => {
	const user: User = { name:  'Nay Ferreira'};

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
					<AccountDropdown user={user}/>
				</NavRight>
			</Wrapper>
		</Container>
	)
}

export default memo(Header);