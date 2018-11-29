import React from 'react';

const Actions = (props) => (
      <div>
        <button 
          className="big-button"
          onClick={props.handleClick} 
          disabled={props.options === 0}>
          What Should I Do?
        </button>
        <button 
          className="button button--link"
          onClick={props.handleRemoveAll}
        >
          Remove All
        </button>
      </div>
);
export default Actions;