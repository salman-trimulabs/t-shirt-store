import HomePage from "../../pages/Home";
import Cart from "../../pages/Cart";
import ProductDetail from "../../pages/ProductDetail";
import { HOME_ROUTE, PRODUCT_DETAIL_ROUTE, CART_ROUTE } from "../constants/"
const Routes = [
  {
    path: [HOME_ROUTE, HOME_ROUTE + ":id"],
    name: "home",
    exact: true,
    component: HomePage
  },
  {
    path: PRODUCT_DETAIL_ROUTE + ":id",
    name: "detail",
    exact: true,
    component: ProductDetail
  },
  {
    path: CART_ROUTE,
    name: "cart",
    exact: true,
    component: Cart
  }
];

export default Routes;
