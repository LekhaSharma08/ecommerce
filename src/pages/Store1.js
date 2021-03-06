import { React, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/cards.css";
import Filter from "../components/Filter.jsx";
import Shoes from "../components/Shoes.jsx";
import Cart from "../components/Cart.jsx";

const Store1 = () => {
  const [cart, setCart] = useState([]);
  const [temp, updateTemp] = useState([]);
  const [shoes, setShoes] = useState([
    {
      id: 1,
      image: "shoe.jpg",
      name: "KSL01",
      price: 2199,
    },
    {
      id: 2,
      image: "shoe2.png",
      name: "KSW01",
      price: 2469,
    },
    {
      id: 3,
      image: "shoe.jpg",
      name: "KSL02",
      price: 5969,
    },
    {
      id: 4,
      image: "shoe2.png",
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
          <div className="row px-3 py-4 cards">
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
