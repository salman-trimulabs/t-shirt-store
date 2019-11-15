import React, { Component } from "react";
import CartItem from "../components/CartItem";
import { Heading, Box, ResponsiveContext } from "grommet";
import styled from "styled-components";
import { connect } from "react-redux";
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
    let loadCartItems = (
      <ResponsiveContext.Consumer>
        {size => (
          <Box alignContent="center">
            <CardContainer size={size}>
              {this.props.products.map((item, index) => {
                return <CartItem key={item.product_id} product={item} />;
              })}
            </CardContainer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );

    let emptyCart = <p>Car it empty:(</p>;

    let view = this.props.products.length? loadCartItems: emptyCart;
    return (
      <div>
        {view}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.cartItems.cartItems };
};

export default connect(mapStateToProps, null)(Cart);
