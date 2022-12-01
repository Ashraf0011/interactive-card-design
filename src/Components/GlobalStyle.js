import styled, { createGlobalStyle } from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
export const GlobalStyle = createGlobalStyle`
:root{
  --primary: hsl(45,60%,10%);
  --secondary: hsla(278, 81%, 18%, 1);
}
*{
    margin: 0;
    padding: 0;
   
}
html{
    font-family: "Space Grotesk";
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 2px;
    color:  hsla(278, 81%, 18%, 1);
}


.App{
    max-width: 375px;
    margin: 0 auto;
    @media ${device.mobileL}{
        max-width: 375px;
    }
    @media ${device.tablet}{
        /* max-width: 425px; */
        max-width: 100vw;  /** custom */
    }
    /* @media ${device.laptop} {
        max-width: 768px;
    }
     @media ${device.laptopL}{
        max-width: 1024px;
    }
    @media ${device.desktop}{
        max-width: 1440px;
    }
    @media ${device.desktopL}{
        max-width: 1440px;
    } */
  
}

`