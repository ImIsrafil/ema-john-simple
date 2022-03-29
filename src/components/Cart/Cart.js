import React from 'react'

const Cart = (props) => {
  const { cart } = props;
  // console.log(props);

  let totalQuantity = 0;
  for (let product of cart) {
    totalQuantity = product.quantity ? (totalQuantity + product.quantity) : cart.length;
  }

  const total = parseFloat((cart.reduce((previous, product) => previous + product.price * (!product.quantity ? 1 : product.quantity), 0)).toFixed(2));
  const shipping = total > 0 ? 20 : 0;
  const tax = parseFloat(((total + shipping) * 0.10).toFixed(2));
  const grandTotal = (total + shipping + tax).toFixed(2);


  return (
    <div>
      <h3>ORDER SUMMARY</h3>
      <h4>Cart Items: {totalQuantity}</h4>
      <h4>Total: ${total}</h4>
      <h4>Shipping: ${shipping}</h4>
      <h4>Vat-Tax: ${tax}</h4>
      <h4>Bill: ${grandTotal}</h4>
      {
        props.children
      }
    </div>
  )
}

export default Cart
