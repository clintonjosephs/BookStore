import React from 'react';
import PropTypes from 'prop-types';
import { Watch } from 'react-loader-spinner';

const Spinner = ({ width, height }) => (
  <Watch
    height={height}
    width={width}
    color="var(--accent-color)"
    ariaLabel="loading"
  />
);

Spinner.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Spinner;
