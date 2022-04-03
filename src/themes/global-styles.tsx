import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
body {
	font-family: QuicksandRegular;
}

h1 {
	font-family: QuicksandBold;
}

button{
	font-family:QuicksandSemiBold;
}
`;

export default GlobalStyle;
