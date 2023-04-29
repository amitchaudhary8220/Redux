const axios = require("axios");
const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleWare = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;

//state

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//state type

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESSED = "FETCH_USERS_SUCCESSED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//ACTION CREATOR

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESSED,
    payload: users,
  };
};
const fetchUserFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESSED:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILED:
      return { loading: false, users: [], error: action.payload };

    default:
      return state;
  }
};

//redux-thunk allows action creator to return function instead of action object

//async action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((users) => users.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));
console.log("initial state", store.getState());
store.subscribe(() => console.log("updated state is ", store.getState()));

store.dispatch(fetchUsers());
