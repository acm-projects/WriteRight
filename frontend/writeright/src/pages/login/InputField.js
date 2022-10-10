import "../../everything.css";

import React from "react";

function InputField() {
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

export default InputField;
