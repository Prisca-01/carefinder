'use client';
import React, { createContext, useContext, useReducer } from 'react';

// Action types
type ActionType = { type: string; payload?: any };

// State type
interface StateType {
  // Define your state shape
  actions: string[];
}

// Initial state
const initialState: StateType = {
  actions: [],
};

// Reducer
const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    // Cases
    case 'ADD_ACTION':
      return {
        ...state,
        actions: [...state.actions, action.payload],
      };
    default:
      return state;
  }
};

// Context
const ActionQueueContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
} | null>(null);

// Provider component
export const ActionQueueProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ActionQueueContext.Provider value={{ state, dispatch }}>
      {children}
    </ActionQueueContext.Provider>
  );
};

// Custom hook to use the context
export const useActionQueueContext = () => {
  const context = useContext(ActionQueueContext);
  if (!context) {
    throw new Error(
      'useActionQueueContext must be used within an ActionQueueProvider',
    );
  }
  return context;
};
