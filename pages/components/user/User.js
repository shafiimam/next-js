import React from 'react';
import classes from '../../../styles/style.module.css'
const User = ({ user }) => {
  return (
    <div key={user.id} className={classes.user}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div >
  );
};

export default User;