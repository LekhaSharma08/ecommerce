import React from "react";

const Item = ({ src, name, price, show, onClick }) => {
  return (
    <div class="images" onClick={() => onClick()}>
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
            src="/assets/rating.png"
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
