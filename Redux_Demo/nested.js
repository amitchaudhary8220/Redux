const redux = require("redux");
const produce = require("immer").produce;
//immer helps us to updated nested object more easily
const createStore = redux.createStore;

const NESTED = "NESTED";

const initialState = {
  name: "amit",
  address: {
    city: "lko",
    state: "UP",
    country: "India",
  },
};

const actionCreator = (street) => {
  return {
    type: NESTED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NESTED:
      return {
        ...state,
        address: { ...state.address, country: action.payload },
      };
    //   return produce(state, (draft) => {
    //     draft.address.country = action.payload;
    //   });
    default:
      return state;
  }
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log("updated state ", store.getState());
});

store.dispatch(actionCreator("uk"));
store.dispatch(actionCreator("us"));
store.dispatch(actionCreator("india"));
unsubscribe();
