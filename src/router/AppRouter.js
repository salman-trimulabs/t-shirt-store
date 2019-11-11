import { Grommet } from "grommet";
import Theme from "../theme/theme";
import { createGlobalStyle } from "styled-components";
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid, Box, ResponsiveContext } from "grommet";
import Routes from "../utils/constants/Routes";

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
                  columns={["auto", "flex"]}
                  areas={[
                    { name: "header", start: [0, 0], end: [1, 0] },
                    { name: "main", start: [1, 0], end: [1, 1] }
                  ]}
                >
                  <Box
                    gridArea="main"
                    pad={{
                      horizontal: size === "small" ? "medium" : "large",
                      vertical: size === "small" ? "small" : "large"
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
