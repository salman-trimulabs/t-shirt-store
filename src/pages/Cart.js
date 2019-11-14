import React, { Component } from "react";
import CartItem from "../components/CartItem";
import { Heading, Box, ResponsiveContext } from "grommet";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchProduct } from "../redux/types/ProductActions";

const ProductFocusedInfo = styled(Heading)`
  width: 100%;
  font-size: 2rem;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  font-weight: 600;
  text-align: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.size === "medium" ? "repeat(1,1fr)" : null};
  grid-template-columns: ${props =>
    props.size === "large" ? "repeat(1,1fr)" : null};
  @media (max-width: 1140px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: 2.75rem;
`;

class Cart extends Component {
  render() {
    console.log(this.props);
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box alignContent="center">
            <ProductFocusedInfo>Cart Items</ProductFocusedInfo>
            <CardContainer size={size}>
              <CartItem
                key={this.props.product.product_id}
                product={this.props.product}
              />
            </CardContainer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => {
  return { product: state.cartItems.item };
};

export default connect(mapStateToProps, null)(Cart);
