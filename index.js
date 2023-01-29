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

// 1. state
// 2. dispatch action
// 3. reducer 
// 4. store
