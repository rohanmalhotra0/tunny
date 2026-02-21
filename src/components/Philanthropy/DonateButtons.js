import React from 'react';
import PropTypes from 'prop-types';

const DonateButtons = ({ donateUrls }) => (
  <div className="donateButtons">
    {donateUrls.directToSeriousFun ? (
      <a
        className="button big button--primary"
        href={donateUrls.directToSeriousFun}
        target="_blank"
        rel="noreferrer"
      >
        Donate (Direct to SeriousFun)
      </a>
    ) : null}

    {donateUrls.viaChapterStripe ? (
      <a
        className="button big"
        href={donateUrls.viaChapterStripe}
        target="_blank"
        rel="noreferrer"
      >
        Donate (Chapter Checkout)
      </a>
    ) : null}
  </div>
);

DonateButtons.propTypes = {
  donateUrls: PropTypes.shape({
    directToSeriousFun: PropTypes.string,
    viaChapterStripe: PropTypes.string,
  }).isRequired,
};

export default DonateButtons;
