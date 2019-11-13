import { SEARCH, PRICE_HIGH_TO_LOW, PRICE_LOW_TO_HIGH, ALL_PRODUCTS } from "../../utils/constants/";

export const searchProduct = (text = "") => ({
  type: SEARCH,
  text
});

export const priceHighToLow = () => ({
  type: PRICE_HIGH_TO_LOW
});

export const priceLowToHigh = () => ({
  type: PRICE_LOW_TO_HIGH
});

export const showAllProducts = () => ({
  type: ALL_PRODUCTS
});
