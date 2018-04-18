import React, { Component } from 'react';


class Input extends Component{

  render(){

    const {onNameChange, onBodyChange, nameValue, bodyValue, onClick} = this.props;

    return(
      <div>
        이름: <input type='text' onChange={onNameChange} value={nameValue}/>
      <br/>
        본문: <input type='text' onChange={onBodyChange} value={bodyValue}/>
      <button onClick={onClick}>쓰기</button>
      </div>
    )
  }
}

export default Input;
