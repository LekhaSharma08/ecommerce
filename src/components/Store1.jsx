import { React, useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/cards.css";
import Filter from "./Filter.jsx";
import Shoes from "./Shoes.jsx";
import Cart from "./Cart.jsx";

// export const StoreContext = createContext();

const Store1 = () => {
  const [cart, setCart] = useState([]);
  const [shoes, setShoes] = useState([
    {
      image: "/assets/shoe.jpg",
      name: "KSL01",
      price: 2199,
    },
    {
      image: "/assets/shoe2.png",
      name: "KSW01",
      price: 2469,
    },
    {
      image: "/assets/shoe.jpg",
      name: "KSL02",
      price: 5969,
    },
    {
      image: "/assets/shoe2.png",
      name: "KSW02",
      price: 6669,
    },
  ]);
  return (
    <CartContext.Provider value={{ cart, setCart, shoes, setShoes }}>
      <div className="Main">
        <div className="container-fluid">
          <div className="row px-3 py-3 cards">
            <Filter />
            <Shoes />
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
};

export default Store1;
