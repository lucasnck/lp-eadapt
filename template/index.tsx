import * as React from "react";
import { theme } from "./theme";

import { createGlobalStyle, ThemeProvider } from "styled-components";

export interface ITemplateProps {}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const Template: React.FC<ITemplateProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
};

export default Template;
