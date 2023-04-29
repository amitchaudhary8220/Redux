const store = require("./app/store");
const cakeAction = require("./features/cake/cakeSlice").cakeAction;
const iceCreamAction =
  require("./features/iceCream/iceCreamSlice").iceCreamAction;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial state", store.getState());

// const unsubscribe = store.subscribe(() =>
//   console.log("updated state ", store.getState())
// );
const unsubscribe = store.subscribe(() => {
  console.log("updated state is ", store.getState());
});


store.dispatch(fetchUsers());

// store.dispatch(cakeAction.ordered());
// store.dispatch(cakeAction.ordered());
// store.dispatch(cakeAction.restocked(3));

// store.dispatch(iceCreamAction.ordered());
// store.dispatch(iceCreamAction.ordered());
// store.dispatch(iceCreamAction.restocked(10));

unsubscribe();
