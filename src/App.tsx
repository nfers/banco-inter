import React from 'react'
import BancoInter  from './assets/images/logo.svg';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
			<GlobalStyle />
      <h1>Banco Inter</h1>
			<img src={BancoInter} alt="{BancoInter}" />
    </ThemeProvider>

  );
}

export default App;
