import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../index.css";

import { useCart } from "react-use-cart";

const AddToCart = () => {
  const history = useHistory();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const handleBuyNow = () => {
    // Redirect to the CheckoutForm component
    history.push("/checkout");
  };

  useEffect(() => {
    // Logic to run after the initial render
  }, [items, cartTotal]);

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty!</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.image} style={{ height: '6rem' }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity - 1);
                        }}
                        className="btn btn-info ms-2"
                      >
                        -
                      </button>
                      <button
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity + 1);
                        }}
                        className="btn btn-info ms-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger ms-2"
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="col-auto ms-auto">
            <h2>Total: #{cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button
              onClick={() => emptyCart()}
              className="btn btn-danger m-2"
            >
              Clear Cart
            </button>
            <button onClick={handleBuyNow} className="btn btn-primary m-2">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
