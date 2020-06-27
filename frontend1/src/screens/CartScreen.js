import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen(props) {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const productId = props.match.params.id;
    const qty = props.location.search?Number(props.location.search.split("=")[1]):1 ;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) =>  {
        dispatch(removeFromCart(productId));
    }
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [])
    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>Cart Items</h3><div>Price</div>
                </li>
                {
                    cartItems.length === 0 ?
                    <div>Cart is empty</div> :
                    cartItems.map(item => 
                        <li>
                        <div className="cart-image">
                            <img src={item.image} alt="product"/>
                         </div>
                            <div className="cart-name">
                                <div>
                                    <Link to={"products/" + item.product}>
                                    {item.name}
                                    </Link>
                                </div>
                                <div>Qty: 
                                    <select value={item.qty} onChange={(e) => addToCart(item.product, e.target.value)}>
                                        <option val="1">1</option>
                                        <option val="2">2</option>
                                        <option val="3">3</option>
                                    </select>
                                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
                                </div>
                            </div>
                            <div className="cart-price">${item.price * item.qty}</div>
                        
                        </li> 
                        )
                }
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)};
            </h3>
            <button className="button primary" disabled={cartItems === 0}>
                Procced To Checkout
            </button>
        </div>
    </div>
}

export default CartScreen;