import React, { Component } from "react";
import { Box, Image, Heading, Button } from "grommet";
import styled from "styled-components";
import Theme from "../theme/theme";
import { Trash, CoatCheck } from "grommet-icons";
import TextEllipsis from "react-text-ellipsis";
import { connect } from "react-redux";
import { removeCartItem } from "../redux/types/Cart";

const CartItemWrapper = styled(Box)`
  border-radius: 0.25rem;
  position: relative;
  padding: 1rem;
  margin-top: 2rem;
`;

const ImageContainer = styled(Box)`
  width: 22rem;
  align-self: center;
  margin-right: 2rem;
`;

const ProductFocusedInfo = styled(Heading)`
  font-size: 1.4rem;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
`;

const CartActionButtons = styled(Button)`
  color: ${Theme.global.colors["text-black"]};
  border-color: ${Theme.global.colors.white};
  font-size: 1.3rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 8rem;
`;

class CartItem extends Component {

  onProceedCheckout(){
    window.alert("Page In Progress. Sorry for inconvenience :)");
  }

  onRemoveCartItem = item => {
      this.props.removeCartItem(item);
  }

  render() {
    const { gridArea } = this.props;
    return (
      <CartItemWrapper
        direction="row"
        elevation="medium"
        gridArea={gridArea}
        background={Theme.global.colors.white}
      >
        <ImageContainer>
          <Image
            fit={"contain"}
            src={
              this.props.product.thumbnail
                ? require("../assets/images/".concat(
                    this.props.product.thumbnail
                  ))
                : require("../assets/images/".concat("imageholder.png"))
            }
          />
        </ImageContainer>
        <Box fill direction="column" margin={{ right: "1rem" }}>
          <ProductFocusedInfo level={2}>
            {this.props.product.name}
          </ProductFocusedInfo>
          <ProductFocusedInfo color={Theme.global.colors.active} level={3}>
            {this.props.product.price} $
          </ProductFocusedInfo>
          <TextEllipsis
            lines={2}
            tag={"p"}
            ellipsisChars={"..."}
            style={{ fontSize: "1.2rem" }}
          >
            {this.props.product.description}
          </TextEllipsis>

          <Box direction="row" height="3.2rem" justify="end" gap="small">
            <CartActionButtons
              plain
              label="Remove from cart"
              icon={<Trash color={Theme.global.colors["text-black"]} />}
              onClick={event => {this.onRemoveCartItem(this.props.product)}}
              hoverIndicator={Theme.global.colors.red}
            />

            <CartActionButtons
              plain
              label="Proceed to checkout"
              icon={<CoatCheck color={Theme.global.colors["text-black"]} />}
              onClick={event => {this.onProceedCheckout()}}
              hoverIndicator={Theme.global.colors.brand}
            />
          </Box>
        </Box>
      </CartItemWrapper>
    );
  }
}

const mapDispatchToProps = {
  removeCartItem: removeCartItem,
};

export default  connect(null, mapDispatchToProps)(CartItem);
