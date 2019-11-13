import React, { Component } from "react";
import { Box, Heading, Button } from "grommet";
import Theme from "../theme/theme";
import { Cart, Bold } from "grommet-icons";
import styled from "styled-components";

const HeaderButton = styled(Button)`
  color: ${Theme.global.colors["white"]};
`;

export default class Header extends Component {
  render() {
    return (
      <Box
        fill
        background={Theme.global.colors.active}
        direction="row-responsive"
        pad="small"
        justify="between"
      >
        <Button
          pad="small"
          alignSelf="center"
          hoverIndicator="#F2B447"
          label= "T-Shirt Store"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff"
          }}
          // onClick={() => {this.props.onLogoClick('/')}}
        />

        <Box
          wrap
          alignSelf={"center"}
          align={"center"}
          alignContent={"center"}
          direction="row"
        >
          <HeaderButton
            label="Men"
            onClick={() => {
              this.props.onItemClick(1);
            }}
            hoverIndicator="#F2B447"
          />

          <HeaderButton
            label="Women"
            onClick={() => {
              this.props.onItemClick(2);
            }}
            hoverIndicator="#F2B447"
          />

          <HeaderButton
            label="Kids"
            onClick={() => {
              this.props.onItemClick(3);
            }}
            hoverIndicator="#F2B447"
          />

          <HeaderButton
            label="Shoes"
            onClick={() => {
              this.props.onItemClick(4);
            }}
            hoverIndicator="#F2B447"
          />

          <HeaderButton
            gap="small"
            margin={{
              left: "2rem"
            }}
            icon={<Cart color={Theme.global.colors["white"]} />}
            hoverIndicator="#F2B447"
            onClick={() => {}}
          />
        </Box>
      </Box>
    );
  }
}
