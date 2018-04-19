import React, { Component } from 'react';
import Content from './Content';

class ContentList extends Component{

  render(){

    const {items, onDelete, onUpdate} = this.props;

    const list = items.map((post, index) => (
      <Content
      key={post._id}
      onDelete={onDelete}
      name={post.name}
      body={post.body}
      id={post._id}
      onUpdate={onUpdate}
      />
    ));

    return(
      <div>
        {list}
      </div>
    )
  }
}

export default ContentList
