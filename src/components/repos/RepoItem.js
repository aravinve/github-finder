import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = props => {
  const { repo } = props;
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url} target='_blank'>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repos: PropTypes.object.isRequired
};

export default RepoItem;
