import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(Actions.addTodo(input.value));
        input.value = '';
      }}>
        Add todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;