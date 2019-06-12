import React from 'react';

function Friend (props) {
  return(
    <div className="friend">
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
      <button onClick={() => props.deleteFriend(props.friend.id)}>Delete</button>
      <button onClick={() => props.updateFriend(props.friend.id)}>Update</button>
    </div>
  )
}

export default Friend;
