import React, { Component } from "react";
import { Box, Image, Heading, Button } from "grommet";
import styled from "styled-components";
import Theme from "../../theme/theme";
import { View } from "grommet-icons";
import TextEllipsis from "react-text-ellipsis";
import { addCartItem } from "../../redux/types/Cart";
import { connect } from "react-redux";
import { productDetailPageRoute } from "../../redux/types/RouteActions";
import { showProductDetail } from "../../redux/types/ProductActions"

const ProductItemWrapper = styled(Box)`
  min-height: 13rem;
  position: relative;
  direction: column;
`;

const ImageContainer = styled(Box)`
  max-height: 5rem;
`;

const ActionButton = styled(Button)`
  color: ${Theme.global.colors["text-black"]};
  border-radius: 0.25rem;
  font-size: 1.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

class ProductItem extends Component {
  onProductItemClick = item => {
    this.props.setProductForDetailView(item);
    this.props.routeToProductDetailPage(item.product_id);
  };

  addItemInCart = item => {
    this.props.addCartItem(item);
  };

  render() {
    const { gridArea } = this.props;
    let loadingItem = <h3>Loading...</h3>;
    let productDetailView = (
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
              src={require("../../assets/images/" +
                this.props.product.thumbnail)}
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
              {this.props.product.name}
            </Heading>
            <Heading
              style={{
                fontSize: "1.3rem",
                color: Theme.global.colors["active"]
              }}
              margin="none"
              textAlign="start"
            >
              {this.props.product.price}$
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
            {this.props.product.description}
          </TextEllipsis>
        </Box>
        <Box direction="row" height="3.2rem" justify="between">
          <ActionButton
            plain
            label="View Details"
            icon={<View color={Theme.global.colors["text-black"]} />}
            onClick={event => {
              this.onProductItemClick(this.props.product);
            }}
            hoverIndicator={Theme.global.colors.brand}
          />

          <ActionButton
            plain
            label="Add to cart"
            icon={<View color={Theme.global.colors["text-black"]} />}
            onClick={event => {
              this.addItemInCart(this.props.product);
            }}
            hoverIndicator={Theme.global.colors.inactive}
          />
        </Box>
      </ProductItemWrapper>
    );
    let ViewToShow = this.props.product.product_id !== undefined ? productDetailView : loadingItem;
    return <div>{ViewToShow}</div>;
  }
}

const mapDispatchToProps = {
  addCartItem: addCartItem,
  setProductForDetailView: showProductDetail,
  routeToProductDetailPage: productDetailPageRoute
};

export default connect(null, mapDispatchToProps)(ProductItem);
