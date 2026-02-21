import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import campaigns from '../data/philanthropy/campaigns';
import { formatUsd, getActiveCampaign, getProgressPercent } from '../utils/philanthropy';
import ProgressBar from '../components/Philanthropy/ProgressBar';

const Semesters = () => {
  const active = useMemo(() => getActiveCampaign(campaigns), []);

  return (
    <Main title="Semesters" description="Semester-by-semester fundraising totals.">
      <article className="post" id="semesters">
        <header>
          <div className="title">
            <h2>
              <Link to="/semesters">Semesters</Link>
            </h2>
            <p>Semester-by-semester campaigns (resets each term).</p>
          </div>
        </header>

        <div className="semGrid">
          {campaigns.map((c) => {
            const percent = getProgressPercent(c.raisedAmountUsd, c.goalAmountUsd);
            const isActive = c.id === active.id;
            return (
              <section key={c.id} className={`semCard ${isActive ? 'semCard--active' : ''}`}>
                <div className="semCard__top">
                  <h3 className="semCard__title">
                    {c.semesterLabel} {isActive ? <span className="semCard__badge">Current</span> : null}
                  </h3>
                  <div className="semCard__dates">
                    {c.startDate} → {c.endDate}
                  </div>
                </div>

                <div className="semCard__amounts">
                  <div>
                    <div className="semCard__amount">{formatUsd(c.raisedAmountUsd)}</div>
                    <div className="semCard__muted">raised</div>
                  </div>
                  <div className="semCard__right">
                    <div className="semCard__amount">{formatUsd(c.goalAmountUsd)}</div>
                    <div className="semCard__muted">goal</div>
                  </div>
                </div>

                <ProgressBar percent={percent} label={`${c.semesterLabel} progress`} />
                <div className="semCard__updated">Updated {c.updatedAt}</div>

                {isActive ? (
                  <div className="semCard__actions">
                    {c.donateUrls.directToSeriousFun ? (
                      <a
                        className="button button--primary"
                        href={c.donateUrls.directToSeriousFun}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Donate
                      </a>
                    ) : null}
                    <Link className="button" to="/faq">
                      Donation FAQ
                    </Link>
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </article>
    </Main>
  );
};

export default Semesters;
