import React, { Component } from "react";
import { Box, Image, Heading, Button, Grid } from "grommet";
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
    console.log(this.props.item);
    return (
      <ProductItemWrapper
        onClick={this.props.onItemClick}
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
                color: Theme.global.colors["text-black"]
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
        <Grid
          rows={["xxsmall"]}
          columns={["xxsmall, xxsmall"]}
          areas={[["left", "right"]]}
          gap="none"
          align="end"
        >
          <Box gridArea="left" alignSelf="center" pad="none">
            <Button
              plain
              color={Theme.global.colors["text-black"]}
              label="View Details"
              textAlign="center"
              icon={<View color={Theme.global.colors["active"]} />}
              style={{
                fontSize: "1.3rem",
                color: Theme.global.colors["active"]
              }}
              onClick={() => {}}
              hoverIndicator="light-2"
            />
          </Box>

          <Box alignSelf="center" pad="none" gridArea="right">
            <Button
              plain
              color={Theme.global.colors["text-black"]}
              icon={<Cart color={Theme.global.colors["active"]} />}
              label="Add to cart"
              style={{
                fontSize: "1.3rem",
                color: Theme.global.colors["active"]
              }}
              onClick={() => {}}
              textAlign="center"
              hoverIndicator="light-2"
            />
          </Box>
        </Grid>
      </ProductItemWrapper>
    );
  }
}

export default ProductItem;
