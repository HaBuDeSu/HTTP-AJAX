import React from 'react';

function FriendForm() {
  return(
    <form className="friend-form">
      <input type="text" placeholder="name" />
      <input type="text" placeholder="age" />
      <input type="email" placeholder="email" />
    </form>
  )
}

export default FriendForm;
