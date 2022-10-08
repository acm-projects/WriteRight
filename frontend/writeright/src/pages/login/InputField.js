import React from 'react';
import "../../everything.css";
//InputField.js

class InputField extends React.Component {
  render(){
    return (
        <input
            className="form-fieldLI"
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.target.value)}
        />
    );
  }
}

export default InputField;