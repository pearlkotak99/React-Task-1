import axios from 'axios';
import cookie from 'js-cookie';
const { CART_ADD_ITEM, CART_REMOVE_ITEM } = require("../constants/cartConstants");

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try{
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({type : CART_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            brand: data.brand,
            price: data.price, 
            qty : qty,
        }
        });
        const {cart:{cartItems}} = getState();
        cookie.set("cartItems", JSON.stringify(cartItems));
    }catch(error){

    }
}

const removeFromCart = (productId) => async (dispatch, getState) => {
    try{
        dispatch({type : CART_REMOVE_ITEM, payload: productId});

        const {cart:{cartItems}} = getState();
        cookie.set("cartItems", JSON.stringify(cartItems));
    }catch(error){

    }   
}

export {addToCart, removeFromCart};