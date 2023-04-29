const configureStore = require("@reduxjs/toolkit").configureStore;

// const reduxLogger = require("redux-logger");

const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const userReducer=require('../features/user/userSlice')

// const logger = reduxLogger.createLogger();

//pass different reducer of slice inside reducer ,it is same as of combineReducer of redux

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:userReducer,
  },
 // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),   //we passed getDefaultMiddleware as arugument and concat looger in it because configureStore adds some default middleware automatically , getDefaultMiddleware give list of default middlewaare and we are appending logger in it

});

// console.log("store is ", store);

module.exports = store;
