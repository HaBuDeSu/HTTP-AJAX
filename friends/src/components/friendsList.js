import React from 'react';
import Friend from './friend'

function FriendsList(props) {
  return(
    <div className="friends-list">
      {props.friends.map(friend => (
        <Friend friend={friend} key={friend.id} deleteFriend={props.deleteFriend} updateFriend={props.updateFriend}/>
      ))}
    </div>
  )
}

export default FriendsList;
