import React from 'react';
import "../../everything.css";
//SubmitButton.js

class SubmitButton extends React.Component {
  render(){
    return (
      <div>
        <button
            className="submit-btnLI"
            disabled={this.props.disabled}
            onClick={() => this.props.onClick()}
        >
            {this.props.text}
        </button>
      </div>
    );
  }
}

export default SubmitButton;