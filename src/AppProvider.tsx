import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import { theme } from "./assets/styles/theme";

const AppProvider = ({ children }: any) => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </Router>
);
export default AppProvider;
