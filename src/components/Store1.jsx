import { React, useState, useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/cards.css";
import Filter from "./Filter.jsx";
import Shoes from "./Shoes.jsx";
import Cart from "./Cart.jsx";

// export const StoreContext = createContext();

const Store1 = () => {
  const [cart, setCart] = useState([]);
  const [temp, updateTemp] = useState([]);
  const [shoes, setShoes] = useState([
    {
      id: 1,
      image: "/assets/shoe.jpg",
      name: "KSL01",
      price: 2199,
    },
    {
      id: 2,
      image: "/assets/shoe2.png",
      name: "KSW01",
      price: 2469,
    },
    {
      id: 3,
      image: "/assets/shoe.jpg",
      name: "KSL02",
      price: 5969,
    },
    {
      id: 4,
      image: "/assets/shoe2.png",
      name: "KSW02",
      price: 6669,
    },
  ]);

  
  useEffect(() => {
    updateTemp(shoes);
  }, []);
  
  return (
    <CartContext.Provider
      value={{ cart, setCart, shoes, setShoes, temp, updateTemp }}
    >
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
