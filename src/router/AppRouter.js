import { Grommet } from "grommet";
import Theme from "../theme/theme";
import { createGlobalStyle } from "styled-components";
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid, Box, ResponsiveContext } from "grommet";
import Routes from "../utils/constants/Routes";
import Header from "../components/Header";
const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}`;
class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grommet theme={Theme}>
          <GlobalStyle />
          <ResponsiveContext.Consumer>
            {size => (
              <Fragment>
                <Grid
                  fill
                  rows={["auto", "flex"]}
                  columns={["flex"]}
                  areas={[
                    { name: "header", start: [0, 0], end: [0, 0] },
                    { name: "main", start: [0, 1], end: [0, 1] }
                  ]}
                >
                  <Header fill gridArea="header" />
                  <Box
                    fill
                    gridArea="main"
                    pad={{
                      horizontal: size === "small" ? "small" : "medium",
                      vertical: size === "small" ? "xxsmall" : "small"
                    }}
                    style={size === "small" ? { marginTop: "8rem" } : null}
                  >
                    <Switch>
                      {Routes.map(route => (
                        <Route key={`route-${route.name}`} {...route} />
                      ))}
                    </Switch>
                  </Box>
                </Grid>
              </Fragment>
            )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
