const { cakeAction } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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

  extraReducers: (builder) => {

    builder.addCase(cakeAction.ordered, (state) => {
      state.numberOfIceCream--;
    });
  },

});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamAction = iceCreamSlice.actions;
