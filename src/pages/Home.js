import React, { Component, Fragment } from "react";
import {
  Heading,
  ResponsiveContext
} from "grommet";
import styled from "styled-components";
import Theme from "../theme/theme";
import ProductItem from "../components/ProductCard";
import {fetchProducts} from "../redux/types/ProductActions";
import { connect } from "react-redux";
import FilterContainer from "../components/FilterProducts"
import selectProduct from '../selector/SelectProduct';

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
    this.props.getProducts(this.props.match.params.id===undefined? 1: this.props.match.params.id);  
  }

  onProductItemClick = item => {
    let path = `/detail/${item.product_id}`;
    this.props.history.push(path);
  };

  onNavigateToRoot = path => {
    this.props.history.push(path);
  };


  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Fragment>
            <Heading
              color={Theme.global.colors["text-black"]}
              level={"1"}
              margin={{
                top: size === "small" ? "small" : "medium",
                bottom: size === "small" ? "small" : "medium"
              }}
            >
              Home
            </Heading>
            <FilterContainer/>
            <CardContainer size={size}>
              {this.props.products.map((item, index) => {
                return (
                  <ProductItem
                    key={item.product_id}
                    onItemClick={this.onProductItemClick.bind(this, item)}
                    onLogoClick={this.onNavigateToRoot.bind(this)}
                    item={item}
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
  products: selectProduct(state.productReducer.products, state.filter)
});

const mapDispatchToProps = {
  getProducts: fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
