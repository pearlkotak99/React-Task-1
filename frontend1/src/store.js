import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import cookie from 'js-cookie';

const cartItems = cookie.getJSON("cartItems") || [];

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer,
})
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;