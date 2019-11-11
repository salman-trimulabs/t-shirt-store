import React, { Component, Fragment } from "react";
import {
  Text,
  Box,
  Heading,
  ResponsiveContext,
  TextInput,
  Select
} from "grommet";
import styled from "styled-components";
import Theme from "../theme/theme";
import ProductItem from "../components/ProductCard";
import { Search } from "grommet-icons";
import fetchProducts from "../actions/ProductActions";
import { connect } from "react-redux";

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
const FilterContainer = styled(Box)`
  width: "100%";
  margin-bottom: 5.8rem;
  margin-top: 3rem;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    margin-bottom: 1em;
    margin-right: 0;
  }
`;

const SearchWrapper = styled.div`
  width: 34rem;
  @media only screen and (max-width: 1140px) {
    width: 100%;
  }
`;

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;

  & > svg {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
  }

  input {
    padding-right: 2.5rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const OrderWrapper = styled.div`
  width: 13rem;
  padding-top: 0;
  padding-right: 0;

  input {
    font-size: 1rem;
    font-weight: 400;
  }
  button {
    width: 13rem;
    height: 3rem;
  }

  @media only screen and (max-width: 1140px) {
    width: 100%;

    button {
      width: 100%;
      height: 3rem;
    }
  }
`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: ["All"]
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  onProductItemClick = item => {};

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

            <FilterContainer direction="row" justify="between" align="center">
              <SearchWrapper>
                <Text>Search</Text>
                <SearchBarWrapper>
                  <TextInput
                    placeholder={"Search Species"}
                    //  value={accents(value, true)}
                    // onChange={event => this.setValue(event.target.value)}
                    //onSelect={event => this.onSelect(accents(event.suggestion, false))}
                    // suggestions={this.addAccents(suggestions)}
                    dropHeight={"small"}
                    size={"medium"}
                  />
                  <Search color={Theme.global.colors.active} />
                </SearchBarWrapper>
              </SearchWrapper>

              <OrderWrapper>
                <Text>Order</Text>

                <Select
                  placeholder={"All"}
                  options={this.state.order}
                  value={this.state.selectedOrder}
                  onChange={({ option }) =>
                    this.setState({ selectedOrder: option })
                  }
                />
              </OrderWrapper>
            </FilterContainer>
            <CardContainer size={size}>
              {this.props.products.map((item, index) => {
                return (
                  <ProductItem
                    key={item.key} item = {item}
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
  products: state.products
});

const mapDispatchToProps = {
  getProducts: fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
