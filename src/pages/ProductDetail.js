import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import fetchProduct from "../redux/types/ProductDetail";
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
  min-height: 37rem;

  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: "column";
  }
`;

const TopDetailGrid = styled.div`
  display: grid;

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

class ProductDetail extends Component {

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Fragment>
            <DetailWrapper
              round="0.25rem"
              elevation="medium"
              background={Theme.global.colors.white}
              pad="2rem"
            >
              <TopDetailGrid size={size} direction="row">
                <Box size={size}>
                  <Image
                    className="GridLeft"
                    fit="cover"
                    src={require("../assets/images/afghan-flower.gif")}
                  />
                </Box>
                <div className="GridRight">
                  <Heading
                    color={Theme.global.colors["text-black"]}
                    margin={{
                      top: "0",
                      bottom: "small",
                      left: "0",
                      right: "0"
                    }}
                    level={2}
                  >
                  {this.props.product.name}
                  </Heading>
                  <Heading
                    margin={{
                      top: "0",
                      bottom: "small",
                      left: "0",
                      right: "0"
                    }}
                    color={Theme.global.colors["active"]}
                    size="2rem"
                  >
                  {this.props.product.price + " $"}
                  </Heading>

                  <Heading
                    level={4}
                    margin={{
                      top: "0",
                      bottom: "xxsmall",
                      left: "0",
                      right: "0"
                    }}
                    color={Theme.global.colors["text-black"]}
                  >
                    Description
                  </Heading>
                  <Paragraph
                    color={Theme.global.colors["text-black"]}
                    fill={true}
                    responsive={true}
                    textAlign={"start"}
                    margin={{
                        top: "0",
                        bottom: "xxsmall",
                        left: "0",
                        right: "0"
                      }}
                  >
                  {this.props.product.description}
                  </Paragraph>
                  <Box>
                    <Heading
                      level={4}
                      margin={{
                        top: "0",
                        bottom: "small",
                        left: "0",
                        right: "0"
                      }}
                      color={Theme.global.colors["text-black"]}
                    >
                      Quantity
                    </Heading>
                    <TextInput placeholder="Enter Quantity" label="Quantity" type="Number"/>

                    <Heading
                      level={4}
                      margin={{
                        top: "small",
                        bottom: "small",
                        left: "0",
                        right: "0"
                      }}
                      color={Theme.global.colors["text-black"]}
                    >
                      Size
                    </Heading>
                    <Select
                      options={["small", "medium", "large"]}
                      //   value={value}
                      //   onChange={({ option }) => setValue(option)}
                    />
                  </Box>

                  <Box fill justify="end">
                    <Button
                      gap="1rem"
                      alignSelf="end"
                      icon={<Cart color={Theme.global.colors.active} />}
                      label="Add to cart"
                      onClick={() => {}}
                      margin={{
                        top: "medium",
                        bottom: "small",
                        left: "0",
                        right: "0"
                      }}
                    />
                  </Box>
                </div>
              </TopDetailGrid>
            </DetailWrapper>
          </Fragment>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productDetailReducer.product
});

const mapDispatchToProps = {
  getProduct: fetchProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);