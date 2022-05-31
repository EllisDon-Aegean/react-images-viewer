import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
      font-family: "Aktiv Grotesk";
      src: url("https://radix-cdn.gatethree.io/fonts/Aktiv%20Grotesk%20Woff/AktivGrotesk-Regular.woff") format("woff");
      font-style: normal;
      font-weight: 400;
    }
    
    @font-face {
      font-family: "Acumin Pro Light";
      src: url("https://radix-cdn.gatethree.io/fonts/Acumin%20Pro%20Woff/AcuminPro-Light.woff") format("woff");
      font-style: normal;
      font-weight: 300;
    }
    
    @font-face {
      font-family: "Acumin Pro";
      src: url("https://radix-cdn.gatethree.io/fonts/Acumin%20Pro%20Woff/AcuminPro-Regular.woff") format("woff");
      font-style: normal;
      font-weight: normal;
    }
  }
`;

export default GlobalStyle;
