import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Selected Items:{cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>Remove</button>
                </p>)
            }
        </div>
    );
};

export default Cart;