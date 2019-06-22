import React from 'react';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: action.payload
      };
    default:
      return state;
  }
};
