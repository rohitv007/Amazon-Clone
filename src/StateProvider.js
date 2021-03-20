import React, { createContext, useReducer, useContext } from "react";

// This prepares the Data Layer used to track basket and user
export const StateContext = createContext();

// Create the state Provider and wrap the app in the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);