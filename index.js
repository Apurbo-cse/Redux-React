const { createStore } = require("redux");

// Defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// State
const initialCounterState = {
  count: 0,
};
const initialUserState = {
  users: [
    {
      name: "Aputbo Roy",
    },
  ],
};

// Action   - Object -type,payload

// Increment Counter
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// Decrement Counter
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// payload
const addUser = () => {
  return {
    type: ADD_USER,
    payload: {
      name: "apu",
    },
  };
};

// Create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store - getState(), dispatch(), subscribe()

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounter);
