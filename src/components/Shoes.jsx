import { React, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/shoes.css";
import Item from "./Item";


const Shoes = () => {
  const { cart, setCart, temp } = useContext(CartContext);

  
  return (
    <div className="col-lg-6  py-5">
      <div className="card border-0 shadow height">
        <div className="card-body scroll">
          <h3 className="card-title px-3 py-2">SHOES</h3>
          <div className="flex-container">
            {temp.map((item) => {
              return (
                <div key={item.id}>
                  <Item
                    id = {item.id}
                    type="shoe"
                    src={require(`../assets/${item.image}`)}
                    name={item.name}
                    price={item.price}
                    show={true}
                    onClick={() => {
                      if (!cart.includes(item)) {
                        let cart1 = cart.splice(0);
                        cart1.push(item);
                        setCart(cart1);
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;
