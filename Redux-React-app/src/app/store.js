import { configureStore } from "@reduxjs/toolkit";

// const reduxLogger = require("redux-logger");

import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
import userReducer from "../features/user/userSlice";

// const logger = reduxLogger.createLogger();

//pass different reducer of slice inside reducer ,it is same as of combineReducer of redux

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),   //we passed getDefaultMiddleware as arugument and concat looger in it because configureStore adds some default middleware automatically , getDefaultMiddleware give list of default middlewaare and we are appending logger in it
});

// console.log("store is ", store);

export default store;
