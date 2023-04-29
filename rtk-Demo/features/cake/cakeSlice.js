const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    //below functions are switch cases inside reducer function , here we are directly
    // updating the state because createSlice uses immer library under the hood ,
    //which provide ease for updating the state

    //every function receives two arguments state and action , inside order we are only using
    //state because we are decrementing numberOfCakes by 1;

    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

// console.log("cake slice inside CakeSlicke", cakeSlice);

//in redux toolkit , we do not require action creator and action because createSlice will create
//actionCreator with the same name as of fucntion passed inside reducer
module.exports = cakeSlice.reducer;
module.exports.cakeAction = cakeSlice.actions;

//createSlice - handles creation of constant states , actionCreator , action object , swith case inside reducer function and state updation
