import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percent, label }) => (
  <div className="progress">
    <div className="progress__meta">
      <span>{label}</span>
      <span>{Math.round(percent)}%</span>
    </div>
    <div
      className="progress__track"
      role="progressbar"
      aria-label={label}
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="progress__fill" style={{ width: `${percent}%` }} />
    </div>
  </div>
);

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  label: PropTypes.string,
};

ProgressBar.defaultProps = {
  label: 'Progress',
};

export default ProgressBar;
