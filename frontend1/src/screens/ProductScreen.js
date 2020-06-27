
import React, { useEffect, useState } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {

        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id  + "?qty=" + qty);
    }
    return <div>
        <div className="home">
            <Link to="/">Home</Link>
        </div>
        {loading ?  <div>Loading...</div> : 
         error ? <div>{error}</div> :
        ( 
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product1"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.brand}
                    </li>
                    <li>
                        Price : <b>${product.price}</b>
                    </li>
                    <li>
                        Description :
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price : ${product.price}
                    </li>
                    <li>
                        Quantity : <select value = {qty} onChange={(e) => {setQty(e.target.value)}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                    </li>
                </ul>
            </div>
        </div>
        )}
    </div>
    
}

export default ProductScreen;