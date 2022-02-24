import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/ToogleSwitch.module.css';

const ToogleSwitch = ({ checked, checkHandler }) => {
  const handleCheck = (e) => {
    let status = 'light';
    if (e.target.checked) {
      status = 'dark';
    }
    checkHandler(status);
  };
  return (
    <>
      <label className={styles.switch} htmlFor="check">
        <input
          type="checkbox"
          id="check"
          checked={checked}
          onChange={handleCheck}
        />
        <span className={`${styles.slider} ${styles.round}`} />
      </label>
    </>
  );
};

ToogleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkHandler: PropTypes.func.isRequired,
};

export default ToogleSwitch;
