import HomePage from "../../pages/Home";
import ProductDetail from "../../pages/ProductDetail";

const Routes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: HomePage
  },
  {
    path: "/detail/:id",
    name: "detail",
    exact: true,
    component: ProductDetail
  }
];

export default Routes;
