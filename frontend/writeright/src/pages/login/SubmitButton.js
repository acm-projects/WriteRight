import React from 'react';
import "../../everything.css";
//SubmitButton.js

class SubmitButton extends React.Component {
  render(){
    return (
        <button
            disabled={this.props.disabled}
            onClick={() => this.props.onClick()}
        >
            {this.props.text}
        </button>
    );
  }
}

export default SubmitButton;