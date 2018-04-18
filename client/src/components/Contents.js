import React from 'react';

const Contents = ({items}) => {

  const list = items.map( (item, index) => (
    <li key={index}>{item.name} - {item.body}</li>
  ));

  return(
  <div>
    {list}
  </div>
)};

export default Contents;
