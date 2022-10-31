import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/globalStyles";
import { Theme } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => {
    <ThemeProvider theme={Theme}>
      <Story />;
      <GlobalStyles />
    </ThemeProvider>;
  },
];
