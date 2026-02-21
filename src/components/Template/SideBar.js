import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import organization from '../../data/philanthropy/organization';
import campaigns from '../../data/philanthropy/campaigns';
import ProgressBar from '../Philanthropy/ProgressBar';
import { formatUsd, getActiveCampaign, getProgressPercent } from '../../utils/philanthropy';

const SideBar = () => {
  const location = useLocation();
  const activeCampaign = useMemo(() => getActiveCampaign(campaigns), []);
  const progressPercent = getProgressPercent(
    activeCampaign.raisedAmountUsd,
    activeCampaign.goalAmountUsd,
  );

  return (
    <section id="sidebar">
      <section id="intro">
        <header>
          <h2>
            {organization.chapterPrimaryName} × {organization.chapterSecondaryName}
          </h2>
          <p>{organization.campusName}</p>
        </header>
      </section>

      <section className="blurb">
        <h2>This semester</h2>
        <p>
          We’re raising money for <strong>{organization.philanthropyPartnerName}</strong>.
        </p>
        <div className="sidebarProgress">
          <div className="sidebarProgress__amounts">
            <span>{formatUsd(activeCampaign.raisedAmountUsd)} raised</span>
            <span>{formatUsd(activeCampaign.goalAmountUsd)} goal</span>
          </div>
          <ProgressBar percent={progressPercent} label={`${activeCampaign.semesterLabel} progress`} />
          <p className="sidebarProgress__updated">Updated {activeCampaign.updatedAt}</p>
        </div>
        <ul className="actions">
          <li>
            {location.pathname !== '/' ? (
              <Link to="/" className="button button--primary">
                Donate
              </Link>
            ) : (
              <a
                className="button button--primary"
                href={activeCampaign.donateUrls.directToSeriousFun}
                target="_blank"
                rel="noreferrer"
              >
                Donate
              </a>
            )}
          </li>
          <li>
            <Link to="/about" className="button">
              About SeriousFun
            </Link>
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; {new Date().getFullYear()}.</p>
      </section>
    </section>
  );
};

export default SideBar;
