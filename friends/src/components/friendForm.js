import React from 'react';

function FriendForm(props) {
  return(
    <form className="friend-form" id="friend-form" onSubmit={props.addNewFriend}>
      <input type="text" placeholder="name" name="name" id="name-input"/>
      <input type="number" placeholder="age" name="age" id="age-input"/>
      <input type="text" placeholder="email" name="email" id="email-input"/>
      <button type="submit">Add New Friend</button>
    </form>
  )
}

export default FriendForm;
