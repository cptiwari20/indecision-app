import React from 'react';

const Actions = (props) => (
      <div>
        <button 
          onClick={props.handleClick} 
          disabled={props.options === 0}>
          What Should I Do?
        </button>
        <button onClick={props.handleRemoveAll}>Remove All</button>
      </div>
);
export default Actions;