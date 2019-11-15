import { HOME_ROUTE, PRODUCT_DETAIL_ROUTE, CART_ROUTE } from '../../utils/constants'
import { push } from 'connected-react-router'

export function pageCategoryRoute(page = 1) {
  return function (dispatch) {
    dispatch(push(HOME_ROUTE + page))
  }
}

export function homePageRoute() {
  return function (dispatch) {
    dispatch(push(HOME_ROUTE))
  }
}

export function productDetailPageRoute(id = 1) {
  return function (dispatch) {
    dispatch(push(PRODUCT_DETAIL_ROUTE + id))
  }
}

export function cartPageRoute() {
  return function (dispatch) {
    dispatch(push(CART_ROUTE))
  }
}