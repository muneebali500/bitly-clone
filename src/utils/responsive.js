import { css } from "styled-components";

/////////////// Mobile First Media Queries
// 640 and above
export const smallScreen = (props) => {
  return css`
    @media only screen and (min-width: 40em) {
      ${props}
    }
  `;
};

// 768 and above
export const mediumScreen = (props) => {
  return css`
    @media only screen and (min-width: 48em) {
      ${props}
    }
  `;
};

// 1024 and above
export const largeScreen = (props) => {
  return css`
    @media only screen and (min-width: 64em) {
      ${props}
    }
  `;
};

// 1280 and above
export const extraLargeScreen = (props) => {
  return css`
    @media only screen and (min-width: 80em) {
      ${props}
    }
  `;
};

/////////////// Desktop First Media Query
/////////// Only URL Section is created using Desktop first approach. All other sections are created using Mobile first approach
export const desktopMediumScreen = (props) => {
  return css`
    @media only screen and (max-width: 48em) {
      ${props}
    }
  `;
};

export const desktopSmallScreen = (props) => {
  return css`
    @media only screen and (max-width: 30em) {
      ${props}
    }
  `;
};
