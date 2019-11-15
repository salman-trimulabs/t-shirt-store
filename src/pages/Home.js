import React, { Component, Fragment } from "react";
import { Carousel, ResponsiveContext, Box, Image } from "grommet";
import styled from "styled-components";
import ProductItem from "../components/ProductCard";
import { fetchProducts } from "../redux/types/ProductActions";
import { connect } from "react-redux";
import FilterContainer from "../components/FilterProducts";
import selectProduct from "../selector/SelectProduct";
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.size === "medium" ? "repeat(3,1fr)" : null};
  grid-template-columns: ${props =>
    props.size === "large" ? "repeat(4,1fr)" : null};
  @media (max-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: 2.75rem;
`;

class HomePage extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getProducts(1);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.pageNumber !== null && this.props.pageNumber){
      if (nextProps.pageNumber !== this.props.pageNumber) {
        nextProps.getProducts(nextProps.pageNumber.replace('/', ''));
      }
    }
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Fragment>
            <Box wrap overflow="hidden" alignSelf={"center"}>
              <Carousel fill controls={"selectors"} play={3000}>
                <Image
                  fit="contain"
                  src={require("../assets/images/swede-santa.gif")}
                />
                <Image
                  fit="contain"
                  src={require("../assets/images/the-virgin-mary.gif")}
                />
                <Image
                  fit="contain"
                  src={require("../assets/images/afghan-flower.gif")}
                />

                <Image
                  fit="contain"
                  src={require("../assets/images/thomas-moore.gif")}
                />
              </Carousel>
            </Box>
            <FilterContainer />
            <CardContainer size={size}>
              {
                this.props.products.map((item, index) => {
                return (
                  <ProductItem
                    key={item.product_id}
                    product={item}
                  />
                );
              })}
            </CardContainer>
          </Fragment>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  products: selectProduct(state.productReducer.products, state.filter),
  pageNumber: state.router.location.pathname,
});

const mapDispatchToProps = {
  getProducts: fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
