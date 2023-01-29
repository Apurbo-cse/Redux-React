// Defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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
