import React from 'react';

const Contents = ({items, onDelete, onUpdate}) => {

  const list = items.map( (item, index) => (
    !item.updateFlag ?
    <li
      key={item._id}
      index={index}
      >{`${item.name}-${item.body}`}

      <button
        onClick={()=>{onDelete(item._id)}}
        >삭제</button>

      <button
        onClick={()=>{onUpdate(item._id)}}
        >수정</button>
    </li>
    :
    <li
      key={item._id}
      index={index}
      >
      <input type='text' value={item.name} onChange/>-
      <input type='text' value={item.body} onChange/>
      <button>확인</button>
      <button>취소</button>
    </li>
  ));

  return(
  <div>
    {list}
  </div>
)};

export default Contents;
