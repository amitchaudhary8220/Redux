// import { ordered,restocked }  from "../cake/cakeSlice";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCream--;
    },
    restocked: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
  },
  //there are two ways of using extraReducers

  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numberOfIceCream--;
  //   },
  // },

  //recommened approach

  // extraReducers: (builder) => {
  //   builder.addCase(ordered, (state) => {
  //     state.numberOfIceCream--;
  //   });
  // },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
