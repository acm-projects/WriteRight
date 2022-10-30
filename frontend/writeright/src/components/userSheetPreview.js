import React from 'react';
import preview from '../images/userSheetDecal.png';
//going to be in Project.js

class SheetPreview extends React.Component {
  render(){
    return (
      <a href="/my-projects/project/sheet">
        <button className="childSP"><img src={preview} className="imgSP" alt="User Sheet Preview" />
        <p className="textSP">{this.props.text}</p></button>
      </a>
    );
  }
}

export default SheetPreview;