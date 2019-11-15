import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchProduct } from "../redux/types/ProductActions";
import { addCartItem } from "../redux/types/Cart";
import {
  ResponsiveContext,
  Box,
  Image,
  Heading,
  Button,
  Paragraph,
  TextInput,
  Select
} from "grommet";
import Theme from "../theme/theme";
import { Cart } from "grommet-icons";

const DetailWrapper = styled(Box)`
  border-radius: 0.25rem;
  background: ${Theme.global.colors.white};
  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: "column";
  }
`;

const TopDetailGrid = styled.div`
  display: grid;
  direction: row;
  @media only screen and (max-width: 1050px) {
    display: block;
  }
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  margin-bottom: 1em;

  .GridRight {
    grid-column: 2 / span 3;
  }
`;

const Headings = styled(Heading)`
  color: ${Theme.global.colors["text-black"]};
  margin-bottom: 0.3rem;
`;

const ActionButton = styled(Button)`
  color: ${Theme.global.colors["text-black"]};
  border-color: ${Theme.global.colors.white};
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 8rem;
`;

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      defaultSize: "Medium",
      sizes: ["Small", "Medium", "Large"]
    };
  }

  componentDidMount() {
    if (!this.props.product) {
      this.props.getProduct(this.props.match.params.id);
    }
  }

  addItemInCart = item => {
    this.props.addCartItem(item);
  };

  render() {
    let loadProductDetail = (
      <ResponsiveContext.Consumer>
        {size => (
          <Fragment>
            <DetailWrapper elevation="medium" pad="medium">
              <TopDetailGrid size={size}>
                <Box size={size}>
                  <Image
                    fit="contain"
                    src={
                      this.props.product.thumbnail
                        ? require("../assets/images/" +
                            this.props.product.thumbnail)
                        : require("../assets/images/".concat("imageholder.png"))
                    }
                  />
                </Box>
                <div className="GridRight">
                  <Heading margin="none" level={2}>
                    {this.props.product.name}
                  </Heading>
                  <Heading
                    margin="none"
                    color={Theme.global.colors["active"]}
                    level={2}
                  >
                    {this.props.product.price + " $"}
                  </Heading>

                  <Headings level={4}>Description</Headings>
                  <Paragraph
                    color={Theme.global.colors["text-black"]}
                    fill={true}
                    responsive={true}
                    margin="none"
                  >
                    {this.props.product.description}
                  </Paragraph>
                  <Box
                    direction={"row-responsive"}
                    justify={"start"}
                    gap="small"
                  >
                    <Box direction={"column"}>
                      <Headings level={4}>Quantity</Headings>
                      <TextInput
                        placeholder="Enter Quantity"
                        label="Quantity"
                        type="Number"
                        value={this.state.quantity}
                        onChange={event => {
                          this.setState({
                            quantity:
                              event.target.value <= 0 ? 1 : event.target.value
                          });
                        }}
                      />
                    </Box>
                    <Box direction={"column"}>
                      <Headings level={4}>Size</Headings>
                      <Select
                        options={this.state.sizes}
                        value={this.state.defaultSize}
                        onChange={option => {
                          this.setState({
                            defaultSize: option.value
                          });
                        }}
                      />
                    </Box>
                  </Box>

                  <ActionButton
                    plain
                    hoverIndicator={Theme.global.colors.active}
                    icon={<Cart color={Theme.global.colors["text-black"]} />}
                    label="Add to cart"
                    onClick={event => {
                      this.addItemInCart(this.props.product);
                    }}
                  />
                </div>
              </TopDetailGrid>
            </DetailWrapper>
          </Fragment>
        )}
      </ResponsiveContext.Consumer>
    );
    let loadingProduct = <h3>Loading...</h3>;
    let decideView = this.props.product ? loadProductDetail : loadingProduct;
    return <div>{decideView}</div>;
  }
}

const mapStateToProps = state => ({
  product: state.productReducer.productDetail,
  path: state.router.location.pathname
});

const mapDispatchToProps = {
  getProduct: fetchProduct,
  addCartItem: addCartItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
