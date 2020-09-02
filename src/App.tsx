import React from 'react'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
import GlobalStyle from './styles/global'
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
			<GlobalStyle />
      <Header></Header>			
    </ThemeProvider>

  );
}

export default App;
