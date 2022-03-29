import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err.message));
    });
    return [products, setProducts];
}

export default useProducts;