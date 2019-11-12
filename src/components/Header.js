import React, { Component } from "react";
import { Box, Heading, Button } from "grommet";
import Theme from "../theme/theme";
import { Cart } from "grommet-icons";

export default class Header extends Component {
  onCategorySelected(title, page){
   
  }

  render() {
    return (
      <Box
        fill
        background={Theme.global.colors.active}
        direction="row-responsive"
        pad="small"
        justify="between"
      >
        <Heading
          margin="none"
          alignSelf="center"
          align="center"
          alignContent="center"
          textAlign="center"
          level={2}
          color={Theme.global.colors["white"]}
        >
          T-Shirt Store
        </Heading>

        <Box
          wrap
          alignSelf={"center"}
          align={"center"}
          alignContent={"center"}
          direction="row"
        >
          <Button
            plain
            label="Men"
            align={"center"}
            margin={{
              right: "2rem"
            }}
            style={{
              fontSize: "1.3rem",
              color: Theme.global.colors["white"]
            }}
            onClick={() => {this.onCategorySelected("Men", 1)}}
            hoverIndicator="#F2B447"
          />

          <Button
            plain
            label="Women"
            align={"center"}
            margin={{
              right: "2rem"
            }}
            style={{
              fontSize: "1.3rem",
              color: Theme.global.colors["white"]
            }}
            onClick={() => {this.onCategorySelected("Women", 2)}}
            hoverIndicator="#F2B447"
          />

          <Button
            plain
            label="Kids"
            align={"center"}
            margin={{
              right: "2rem"
            }}
            style={{
              fontSize: "1.3rem",
              color: Theme.global.colors["white"]
            }}
            onClick={() => {this.onCategorySelected("Kids", 3)}}
            hoverIndicator="#F2B447"
          />

          <Button
            plain
            label="Shoes"
            align={"center"}
            style={{
              fontSize: "1.3rem",
              color: Theme.global.colors["white"]
            }}
            onClick={() => {this.onCategorySelected("Shoes", 4)}}
            hoverIndicator="#F2B447"
          />

          <Button
            plain
            align={"center"}
            gap="small"
            margin={{
                left: "2rem"
            }}
            icon={<Cart/>}
            style={{
              fontSize: "1.3rem",
              color: Theme.global.colors["white"]
            }}
            onClick={() => {}}
            hoverIndicator="#F2B447"
          />
        </Box>
      </Box>
    );
  }
}
