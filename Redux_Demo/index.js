const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//since application state must be an object

const initialState = {
  numOfCakes: 10,
};

//action creator - create an action , more generally  a function  returns an action

const orderCake = () => {
  //this object is action , an action is an object with type property
  return { type: CAKE_ORDERED, payload: 1 };
};

const restockCake = (quantity = 1) => {
  return { type: CAKE_RESTOCKED, payload: quantity };
};

// const value = orderCake();
// console.log(value);

//Reducer -- specify how the state of an application changes in response to the action sent to store

//Reducer --a function that accept state and action as arguments  and returns next state of the application

//action only specify what happend , not how the state will change

// (previousState,action )=>newState

const reducer = (state = initialState, action) => {
  //-- reducer is shopkeeper who manage all the order , or who perform all the action , two shopkeeper means two reducers
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      state;
  }
};

//creating two reducers for handling two different state ,

//three method of store --> getState(), dispatch, subscribe , and function returned by subscribe to unsubscribe

const store = createStore(reducer);
// console.log("store is ", store);

// console.log("intital state is ", store.getState());

const unsubscribe = store.subscribe(() => {
  
  console.log("updated state is ", store.getState());

});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

// unsubscribe();

//use keyword paylaod for any extra information we want to send in redux

//an extra thing in redux ---> bindActionCreators

const action = bindActionCreators({ orderCake, restockCake }, store.dispatch);
action.orderCake();
action.orderCake();
action.orderCake();
action.restockCake(3);

unsubscribe();
