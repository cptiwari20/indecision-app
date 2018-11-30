import React from 'react';

const Actions = (props) => (
      <div>
        <button 
          className="big-button"
          onClick={props.handleClick} 
          disabled={props.options === 0}>
          What Should I Do?
        </button>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button 
            className="button button--link"
            onClick={props.handleRemoveAll}
          >
            Remove All
          </button>
        </div>
      </div>
);
export default Actions;