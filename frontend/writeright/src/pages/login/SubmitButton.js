import React from "react";
import "../../everything.css";
//SubmitButton.js

function SubmitButton() {
  return (
    <button disabled={this.props.disabled} onClick={() => this.props.onClick()}>
      {this.props.text}
    </button>
  );
}

export default SubmitButton;
