import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export function StateProvider({ initialState, reducer, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateValue() { return useContext(StateContext); };

export function currentUserReducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...action.payload,
        isAuthenticated: true
      };
    case 'logout':
      return {
        isAuthenticated: false
      };

    default:
      return state;
  }
};
