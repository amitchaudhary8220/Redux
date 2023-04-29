const redux = require("redux");
const createStore = redux.createStore;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BASIC = "BASIC";

const initialState = {
  name: "amit",
  address: {
    city: "lko",
    country: "in",
  },
};

const actionCreator = (country) => {
  return {
    type: BASIC,
    payload: country,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BASIC:
      return {
        ...state,
        address: { ...state.address, country: action.payload },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));

store.dispatch(actionCreator("uk"));
store.dispatch(actionCreator("usa"));
store.dispatch(actionCreator("aus"));
