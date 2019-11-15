import React, { Component } from "react";
import { Box, Button } from "grommet";
import Theme from "../theme/theme";
import { Cart } from "grommet-icons";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  pageCategoryRoute,
  homePageRoute,
  cartPageRoute
} from "../redux/types/RouteActions";

const ButtonDiv = styled.div`
  button {
    color: ${Theme.global.colors["white"]}

    &:hover{
      color: ${Theme.global.colors["text-black"]}
    }
  }
`;

class Header extends Component {
  onNavigateToRoot = () => {
    this.props.routeToHomePage();
  };

  onHeaderItemClick = page => {
    this.props.routeToPage(page);
  };

  onCartClick = id => {
    this.props.routeToCartPage();
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

const mapDispatchToProps = {
  routeToPage: pageCategoryRoute,
  routeToHomePage: homePageRoute,
  routeToCartPage: cartPageRoute,
};

export default connect(null, mapDispatchToProps)(Header);
