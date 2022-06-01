import { React, useContext, useState } from "react";
import "../styles/filter.css";
import { CartContext } from "../contexts/CartContext";
import CheckBox from "./CheckBox";
import ColorButton from "./ColorButton";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Filter = () => {
  const { shoes, setShoes } = useContext(CartContext);

  const filterResult = (price1, price2) => {
    const result = shoes.filter((curData) => {
      return curData.price >= price1 && curData.price <= price2;
    });
    setShoes(result);
  };

  const [ip1, set1] = useState(0);
  const [ip2, set2] = useState(0);
  const [ip3, set3] = useState(0);

  const filter = () => {
    if (ip1 === 1 && ip2 === 1 && ip3 === 1) {
      filterResult("1500", "10000");
  
    } else if ((ip1 == 1 && ip2 == 1)) {
      filterResult("1500", "7000");
    
    } else if (ip2 === 1 && ip3 === 1) {
      filterResult("4001", "10000");
  
    } else if (ip1 === 1) {
      filterResult("1500", "4000");

    } else if (ip2 === 1) {
      filterResult("4001", "7000");
  
    } else if (ip3 === 1) {
      filterResult("7000", "10000");
  
    }
  };

  return (
    <div className="col-lg-3 py-5">
      <div className="card border-0 shadow height">
        <div className="card-body scroll">
          <h3
            className="card-title px-3 py-2"
            style={{ display: "inline-block" }}
          >
            FILTERS
          </h3>
          <div className="icon">
            <FilterAltOutlinedIcon fontSize="large" />
          </div>
          <div className="content">
            <h4>Cost</h4>
            <CheckBox
              val="Rs. 1500-4000"
              id="1"
              ip={ip1}
              change={() => {
                set1(1);
              }}
            />
            <CheckBox
              val="Rs. 4001-7000"
              id="2"
              ip={ip2}
              change={() => {
                set2(1);
              }}
            />
            <CheckBox
              val="Rs. 7000+"
              id="3"
              ip={ip3}
              change={() => {
                set3(1);
              }}
            />
            <div className="spacing">
              <h4>Colour</h4>
              <div className="color-btn">
                <ColorButton />
              </div>
            </div>

            <div className="spacing">
              <h4>Design templates</h4>
              <CheckBox val="2" />
              <CheckBox val="3" />
              <CheckBox val="3+" />
            </div>

            <div className="spacing">
              <h4>Type</h4>
              <CheckBox val="Loafers" />
              <CheckBox val="Sneakers" />
            </div>
            <div className="center">
              <button type="button" className="apply" onClick={filter}>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
