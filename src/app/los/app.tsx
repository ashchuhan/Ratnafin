import { Fragment } from "react";
import { RecoilRoot } from "recoil";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import IndexPage from "pages_los";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./theme";
import "./index.css";

const themeObj = createMuiTheme(theme);

export const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={themeObj}>
          <RecoilRoot>
            <IndexPage />
          </RecoilRoot>
        </ThemeProvider>
      </BrowserRouter>
    </Fragment>
  );
};
