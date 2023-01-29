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
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};



// Increment Counter

// Decrement Counter
