import { useState } from "react";
function IncDecCounter() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    setNum(Number(num) + 1);
  };

  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <>
      <div className="group">
        <div className="input-group">
          <div className="input-group-prepend">
            <button className="btn-sm btn-dark" type="button" onClick={decNum}>
              -
            </button>
          </div>
          <span className="counter">{num}</span>
          <div className="input-group-prepend">
            <button className="btn-sm btn-dark" type="button" onClick={incNum}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncDecCounter;
