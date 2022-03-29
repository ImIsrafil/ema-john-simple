import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product);
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p>Only {stock} left in stock</p>
                <Rating
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    initialRating={star}
                    readonly
                ></Rating>
                <br />
                <br />
                <button className='btn-regular' onClick={() => props.handleAddToCart(props.product)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    add to cart</button>
            </div>
        </div>
    );
};

export default Product;