import React, { Component } from "react";
import { Box, Button } from "grommet";
import Theme from "../theme/theme";
import { Cart } from "grommet-icons";
import styled from "styled-components";
import { createBrowserHistory } from "history";
import { HOME_ROUTE, CART_ROUTE } from "../utils/constants/";
const history = createBrowserHistory({ forceRefresh: true });

const ButtonDiv = styled.div`
  button {
    color: ${Theme.global.colors["white"]}

    &:hover{
      color: ${Theme.global.colors["text-black"]}
    }
  }
`;

export default class Header extends Component {
  onNavigateToRoot = () => {
    history.push(HOME_ROUTE);
  };

  onHeaderItemClick = page => {
    history.push(HOME_ROUTE + page);
  };

  onCartClick = id => {
    history.push(CART_ROUTE);
  };

  render() {
    return (
      <Box
        fill
        background={Theme.global.colors.active}
        direction="row-responsive"
        pad="small"
        justify="between"
      >
        <ButtonDiv>
          <Button
            label="T-Shirt Store"
            style={{
              fontSize: "2rem",
              fontWeight: "bold"
            }}
            onClick={() => {
              this.onNavigateToRoot();
            }}
          />
        </ButtonDiv>
        <Box wrap alignSelf={"center"} direction="row">
          <ButtonDiv>
            <Button
              label="Men"
              onClick={() => {
                this.onHeaderItemClick(1);
              }}
            />

            <Button
              label="Women"
              onClick={() => {
                this.onHeaderItemClick(2);
              }}
            />

            <Button
              label="Kids"
              onClick={() => {
                this.onHeaderItemClick(3);
              }}
            />

            <Button
              label="Shoes"
              onClick={() => {
                this.onHeaderItemClick(4);
              }}
            />

            <Button
              margin={{
                left: "2rem"
              }}
              icon={<Cart color={Theme.global.colors["white"]} />}
              onClick={() => {
                this.onCartClick(4);
              }}
            />
          </ButtonDiv>
        </Box>
      </Box>
    );
  }
}
