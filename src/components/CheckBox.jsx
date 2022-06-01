import { React } from "react";

const CheckBox = (props) => {
  return (
    <form>
      <div className="form-check">
        <input
          className="form-check-input"
          value={props.ip?1:0}
          type="checkbox"
          id={props.id}
          onChange={() => props.change()}
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          {props.val}
        </label>
      </div>
    </form>
  );
};

export default CheckBox;
