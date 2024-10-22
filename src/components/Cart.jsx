import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { LoginContext } from '../context/LoginContext';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, notification } = useContext(CartContext);
  const { isLoggedIn } = useContext(LoginContext); 

  if (!isLoggedIn) {
    return (
      <div className="container my-4">
        <div className="alert alert-danger" role="alert">
          You need to log in to view your cart details.
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      {notification && (
        <div className="alert alert-success" role="alert">
          {notification}
        </div>
      )}
      <h1 className="text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="alert alert-warning">Your cart is empty</div>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <div className="d-flex align-items-center mb-3">
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-secondary btn-sm ms-2"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="card-text">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button 
                      className="btn btn-danger" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                    <button className="btn btn-success">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
