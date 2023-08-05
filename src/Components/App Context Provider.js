import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const updateTimes = (state, action) => {
  return action.reservationTimes;
};

const AppContextProvider = ({ children }) => {
  const initialState = [];
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initialState);

  return (
    <AppContext.Provider value={{ availableTimes, dispatchAvailableTimes }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;