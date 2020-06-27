import React, { useState, useEffect } from 'react';
import {listProducts} from '../actions/productActions';

import {Link} from 'react-router-dom';import { useSelector, useDispatch } from 'react-redux';



function HomeScreen (props) {
    //const [products, setProduct] = useState([]);
    const productList = useSelector(state => state.productList);
    const {products, loading, error}  = productList;   
    const dispatch = useDispatch();
    useEffect(() => {
        // const fetchData = async () => {
        //     const { data } = await axios.get("/api/products");
        //     console.log(data);
        //     setProduct(data);
        // }
        //fetchData();
        dispatch(listProducts());
        return () => {

        };
    }, [])

    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <ul className="products">
    {
      products.map(product => 
      <li key={product._id}>
          <div className="product">
            <Link to={'/products/' + product._id}>
                <img className="product-image" src={product.image} alt="product1"/>
                </Link>
                <div className="product-name">{product.name}
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
          </div>
      </li>)

    }
  </ul>
}

export default HomeScreen;