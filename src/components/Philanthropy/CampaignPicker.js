import React from 'react';
import PropTypes from 'prop-types';

const CampaignPicker = ({ campaigns, value, onChange }) => (
  <div className="campaignPicker">
    <label htmlFor="campaignPicker" className="campaignPicker__label">
      Semester
      <select
        id="campaignPicker"
        className="campaignPicker__select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {campaigns.map((c) => (
          <option key={c.id} value={c.id}>
            {c.semesterLabel}
          </option>
        ))}
      </select>
    </label>
  </div>
);

CampaignPicker.propTypes = {
  campaigns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      semesterLabel: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CampaignPicker;
