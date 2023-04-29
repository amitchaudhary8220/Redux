const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//to combine multiple reducer ,redux provide a method called combineReducers --> then it will be passed in  createStore to create th store object

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const iceCream_ORDERED = "iceCream_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
//state 
const initialCakeState = {
  numberOfCakes: 10,
};

const initialiceCreamState = {
  numberOficeCreams: 20,
};


//action creator
const cakeOrder = (quantity = 1) => {
    //action 
  return { type: CAKE_ORDERED, payload: quantity };
};

const cakeRestocked = (quantity = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
};

const iceCreamOrder = (quantity = 1) => {
  return {
    type: iceCream_ORDERED,
    payload: quantity,
  };
};

const iceCreamRestock = (quantity = 1) => {
  return { type: ICECREAM_RESTOCKED, payload: quantity };
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialiceCreamState, action) => {
  switch (action.type) {
    case iceCream_ORDERED:
      return {
        ...state,
        numberOficeCreams: state.numberOficeCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOficeCreams: state.numberOficeCreams + action.payload,
      };
      case CAKE_ORDERED:  //here we can see that when we are using more than one reducer function ,when we updated any state then type is checked in every reducer function and where type matches we updated the state of that perticular reducer , however we can also updated state of a reducer by using the type of other reducer , but we can not the change the state of other reducer in other reducer funtion;
        // this thing is not possible in redux toolkit , for this we have to use extraReducer functionality
        return{
          ...state,
          numberOficeCreams:state.numberOficeCreams-action.payload,
        }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

const action = bindActionCreators(
  { cakeOrder, cakeRestocked, iceCreamOrder, iceCreamRestock },
  store.dispatch
);

action.cakeOrder(1);
action.cakeOrder(1);
action.cakeOrder(1);
action.cakeRestocked(3);

action.iceCreamOrder(2);
action.iceCreamOrder(2);
action.iceCreamOrder(3);
action.iceCreamRestock(5);
