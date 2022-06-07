import React, { useEffect } from "react";
import { useContext } from "react";
import "../styles/cart.css";
import { CartContext } from "../contexts/CartContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CancelIcon from "@mui/icons-material/Cancel";
import Item from "./Item";
import Counter from "./Counter";

const Cart = () => {
  // const { cart } = useContext(StoreContext);
  const { cart, setCart } = useContext(CartContext);
  function removeItem(id) {
    // for (var n = 0; n < cart.length; n++) {
    //   if (cart[n].id === id) {
    //     cart.splice(n, 1);
    //     break;
    //   }
    // }
    setCart(cart => {
      return cart.filter((data) => data.id !== id)    
    })
    // console.log(
    //   cart.map((item) => {
    //     return item.id;
    //   })
    // );
  }

  // useEffect(() => {
  //   setCart(cart);
  //   console.log("render");
  // }, [cart.length]);

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
            <div>
              {cart.map((item) => {
                return (
                  <div
                    className="flex-container"
                    style={{ paddingTop: 20 }}
                    key={item.id}
                  >
                    <div className="cross">
                      <button
                        style={{ border: 0, backgroundColor: "white" }}
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        <CancelIcon />
                      </button>
                    </div>
                    <div>
                      <Item
                        id={item.id}
                        type="cart"
                        src={require(`../assets/${item.image}`)}
                        name={item.name}
                        price={item.price}
                        onClick={() => {}}
                      />
                    </div>
                    <Counter />
                  </div>
                );
              })}
            </div>
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
