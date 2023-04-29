import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IcecreamView = () => {
  const [value, setValue] = useState(1);
  //to read data from react store in react component we use useSelector

  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of iceCream -{numberOfIceCreams}</h1>
      <button onClick={() => dispatch(ordered())}>order iceCream</button>
      <input
        placeholder="enter the value"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        restock iceCreams
      </button>
    </div>
  );
};

export default IcecreamView;
