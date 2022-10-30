import React from 'react';
//going to be in myProject.js

class ProjectButton extends React.Component {
  render(){
    return (
      <a href="/my-projects/project">
        <button
            className='projectMP'
            disabled={this.props.disabled}
            onClick={() => this.props.onClick()}
        >
            {this.props.text}
        </button>
        </a>
    );
  }
}

export default ProjectButton;