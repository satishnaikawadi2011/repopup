import { createGlobalStyle } from 'styled-components';
import QuicksandRegular from '../fonts/Quicksand-Regular.ttf';
import QuicksandBold from '../fonts/Quicksand-Bold.ttf';
import QuicksandSemiBold from '../fonts/Quicksand-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "QuicksandRegular";
	src: local("QuicksandRegular"), url(${QuicksandRegular}) format("truetype");
	font-weight: normal;
}

@font-face {
	font-family: "QuicksandBold";
	src: local("QuicksandBold"), url(${QuicksandBold}) format("truetype");
	font-weight: bold;
}
@font-face {
	font-family: "QuicksandSemiBold";
	src: local("QuicksandSemiBold"), url(${QuicksandSemiBold}) format("truetype");
	font-weight: bold;
}
.modal__container *{
font-family: QuicksandRegular;
}

.modal__container h1{
font-family: QuicksandBold;
}

.modal__container button{
	font-family:QuicksandSemiBold;
}

`;

export default GlobalStyle;
