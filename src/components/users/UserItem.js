import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = props => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='rounded my-2'
        style={{ width: '60px' }}
      />
      <h2>{login}</h2>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-2'>
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
