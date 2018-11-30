import React, { Component} from 'react';
import Option from './Option';

 class Options extends Component {
   renderNoOption = (props) => {
      if(props.options.length === 0) {
        return <p className="widget__message">Please add an options for getting started.</p>
      }
   }
   render(){
     return(
        <div>
          {this.renderNoOption(this.props)}
          {this.props.options.map((option, i) => 
            <Option 
                option={option} 
                key={i}
                count={i + 1}
                handleDeleteOption={this.props.handleDeleteOption} />
          )}
        </div>
    )
   }
 };
export default Options;