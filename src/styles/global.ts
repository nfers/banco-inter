import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			outline: 0;
		}

		html {
			font-size: 62.5%; 
			height: 100%;
			@media (min-width: 1981px) {
				font-size: 80%;
				};
  	}

		body, #root {
			min-height: 100vh;
			height: 100%;
			position: relative;
			display: flex;
			flex-direction: column;
  	}

		body, input, button {
			font-family: 'Inter', 'Roboto';
			font-size: 16px;
			-webkit-font-smoothing: antialiased !important;
			line-height: 1.48;
		}

		body {    
			background: ${({ theme }) => theme.colors.lightGrey};
			color: ${({ theme }) => theme.colors.grey};
	    text-rendering: optimizeLegibility !important;
  	  -webkit-font-smoothing: antialiased !important;
   	  -moz-osx-font-smoothing: grayscale;
   	}

	  a {
			text-decoration: none;
			background: none;
			font-weight: 700;
			cursor: pointer;
			border: 0;
			transition: 180ms ease-in-out;
		}

		h1, h2, h3, h4, h5 {
			font-weight: 500;
		}

		strong {
			font-weight: 800;
		}

		button {
			cursor: pointer;
			border: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		ul {
  	  list-style: none;
   	 	text-align: left;
   	 	padding: 0;
  	}

		img {
			width: 45px;
		}
`;
