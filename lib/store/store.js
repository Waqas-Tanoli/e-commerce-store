//First file to configure REdux Store...

import { configureStore } from "@reduxjs/toolkit";

// Dummy reducer
const dummyReducer = (state = {}, action) => {
  return state;
};

// Creating Store ...
export const makeStore = () => {
  return configureStore({
    reducer: {
      dummy: dummyReducer,
    },
  });
};

// testing.....
const store = makeStore();

console.log("Redux Store:", store);
console.log("Initial State:", store.getState());
