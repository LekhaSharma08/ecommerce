import React from "react";
import StarImage from "../assets/rating.png"

const Item = ({ src, name, price, show, onClick }) => {
  return (
    <div className="images" onClick={() => onClick()}>
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
