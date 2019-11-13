import React, { Component } from "react";
import { Box, Image, Heading, Button } from "grommet";
import styled from "styled-components";
import Theme from "../../theme/theme";
import { Cart, View } from "grommet-icons";
import TextEllipsis from "react-text-ellipsis";
const ProductItemWrapper = styled(Box)`
  min-height: 13rem;
  position: relative;
  direction: column;
`;

const ImageContainer = styled(Box)`
  max-height: 5rem;
`;

class ProductItem extends Component {
  render() {
    const { gridArea } = this.props;
    return (
      <ProductItemWrapper
        round="0.25rem"
        elevation="medium"
        gridArea={gridArea}
        background={Theme.global.colors.white}
      >
        <Box direction="row">
          <ImageContainer>
            <Image
              style={{
                borderTopLeftRadius: "0.25rem",
                marginRight: 10,
                marginBottom: 0,
                marginTop: 0
              }}
              src={require("../../assets/images/" + this.props.item.thumbnail)}
            />
          </ImageContainer>
          <Box direction="column">
            <Heading
              style={{
                fontSize: "1.375rem",
                color: Theme.global.colors["text-black"]
              }}
              margin="none"
            >
              {this.props.item.name}
            </Heading>
            <Heading
              style={{
                fontSize: "1.3rem",
                color: Theme.global.colors["active"]
              }}
              margin="none"
              textAlign="start"
            >
              {this.props.item.price}$
            </Heading>
          </Box>
        </Box>
        <Box pad="small">
          <TextEllipsis
            lines={2}
            tag={"p"}
            ellipsisChars={"..."}
            style={{ fontSize: 20, marginRight: "20px" }}
          >
            {this.props.item.description}
          </TextEllipsis>
        </Box>
        <Box direction="row" height="3.2rem" justify="between">
          <Box
            background={Theme.global.colors.active}
            pad="small"
            alignContent="center"
            style={{
              borderBottomLeftRadius: "0.25rem"
            }}
          >
            <Button
              plain
              color={Theme.global.colors["text-black"]}
              label="View Details"
              textAlign="center"
              icon={<View color={Theme.global.colors["text-black"]} />}
              style={{
                fontSize: "1.3rem",
                color: Theme.global.colors["text-black"]
              }}
              onClick={this.props.onItemClick}
              hoverIndicator="light-5"
            />
          </Box>
          <Box
            background={Theme.global.colors["text-black"]}
            pad="small"
            alignContent="center"
            style={{
              borderBottomRightRadius: "0.25rem"
            }}
          >
            <Button
              plain
              color={Theme.global.colors["text-black"]}
              icon={<Cart color={Theme.global.colors["active"]} />}
              label="Add to cart"
              style={{
                fontSize: "1.3rem",
                color: Theme.global.colors["active"]
              }}
              onClick={this.props.onItemClick}
              textAlign="center"
              hoverIndicator="light-5"
            />
          </Box>
        </Box>
      </ProductItemWrapper>
    );
  }
}

export default ProductItem;
