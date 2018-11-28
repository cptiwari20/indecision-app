import React from 'react';
import Option from './Option';

 const Options = (props) => (
      <div>
        {props.options.map((option, i) => {
          return(
            <div>
              <Option 
                  option={option} 
                  key={i}
                  handleDeleteOption={props.handleDeleteOption} />
            </div>
          )
        })}
      </div>
);
export default Options;