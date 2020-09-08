import React from 'react'
import { Container } from './style';
import { useTheme } from 'styled-components';

const removeHashFromColor = (color: string): string => color.slice(1);


const AccountDropdown: React.FC = () => {
	const { lightGrey, secondary } = useTheme().colors;

	return (
		<Container>
			 <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=Fulano`}
        alt={`Conta de Fulano`}
      />
		</Container>
	)
}

export default AccountDropdown;