import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <React.Fragment>
      <img
        src={spinner}
        alt='Loading'
        style={{ display: 'block', width: '60px', margin: 'auto' }}
      />
    </React.Fragment>
  );
};

export default Spinner;
