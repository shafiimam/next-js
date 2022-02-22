import React from 'react';
import classes from '../../styles/style.module.css';
const User = (props) => {
  const { user } = props;
  return (
    <div className={classes.user}>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div >
  );
};

export default User;