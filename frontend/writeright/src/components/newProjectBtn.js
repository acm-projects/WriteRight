import React from 'react';
//going to be in myProject.js

class NewProjectButton extends React.Component {
  render(){
    return (
      <a href="/my-projects/project">
        <button
            className='projectMP'
            id='NewProject'
            disabled={this.props.disabled}
            onClick={() => this.props.onClick()}
        >
            {this.props.text}
        </button>
        </a>
    );
  }
}

export default NewProjectButton;