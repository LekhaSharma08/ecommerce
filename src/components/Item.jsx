import React from "react";
import StarImage from "../assets/rating.png"

const Item = ({ src, name, price, show, onClick, type, id }) => {
  return (
    // style={{paddingLeft:type=="cart"?15:35, "paddingTop":type=="cart"?25:35 }}
    <div style={{paddingLeft:type ==="cart"?0:"3.5rem" ,"paddingTop":type === "cart"?25:35}} onClick={() => onClick()}>
      <img
        src={src}
        alt="can't fetch"
        height={show ? "200px" : "100"}
        width={show ? "200px" : "100"}
      />
      <span>
        <h4>{name}</h4>
      </span>
      <div>
        <span>Rs. {price}</span>
        {show && (
          <img
            src={StarImage}
            alt="can't fetch"
            height="22px"
            width="140px"
            className="stars"
          />
        )}
      </div>
    </div>
  );
};

export default Item;
