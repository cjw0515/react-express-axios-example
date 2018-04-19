import React, {Component} from 'react';

class Content extends Component{

  state = {
    editMode: false,
    value: this.props.body
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render(){
    const {name, id, body, onDelete, onUpdate} = this.props;

    const postView = (
      <li
      >{name} - {body}
      <button
        onClick={()=>{onDelete(id)}}
        >삭제</button>
      <button
        onClick={this.toggleEdit}
        >수정</button>
    </li>
    );

    const editView = (
      <li>
        {name} -
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}

          />
        <button onClick={()=>{
            onUpdate(id, this.state.value)
            .then(()=>{this.toggleEdit()}) }}>확인</button>
        <button onClick={this.toggleEdit}>취소</button>
      </li>
    )

    return(
      <div>
        {this.state.editMode ? editView : postView}
      </div>
    )
  }
}

export default Content;
