import React from "react";
import { useContext } from "react";
import "../styles/cart.css";
import { CartContext } from "../contexts/CartContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Item from "./Item";
import Counter from "./Counter";

const Cart = () => {
  // const { cart } = useContext(StoreContext);
  const { cart } = useContext(CartContext);

  return (
    <div className="col-lg-3 col-md-12 py-5">
      <div className="card border-0 shadow height">
        <div className="card-body scroll">
          <h3
            className="card-title px-3 py-2"
            style={{ display: "inline-block" }}
          >
            CART
          </h3>
          <div className="icon">
            <LocalMallIcon fontSize="large" />
          </div>
          {cart.length ? (
            <>
              {cart.map((item) => {
                return (
                  <div className="flex-container">
                    <Item
                      src={item.image}
                      name={item.name}
                      price={item.price}
                      onClick={() => {}}
                    />

                    <Counter />
                  </div>
                );
              })}
            </>
          ) : (
            <div className="flex-center" style={{ height: "530px" }}>
              <span>Your cart is empty!</span>
            </div>
          )}
          <div className="flex-center">
            <button
              type="button"
              className=""
              disabled={cart.length ? false : true}
              style={{
                backgroundColor: cart.length ? "black" : "grey",
                color: "white",
                width: "100px",
                border: "none",
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
