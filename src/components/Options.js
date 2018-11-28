import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
  render(){
    return(
      <div>
        {this.props.options.map((option, i) => {
          return(
            <Option option={option} key={i} />
          )
        })}
      </div>
    )
  }
};