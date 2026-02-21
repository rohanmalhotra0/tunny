import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import organization from '../data/philanthropy/organization';
import campaigns from '../data/philanthropy/campaigns';
import CampaignPicker from '../components/Philanthropy/CampaignPicker';
import ProgressBar from '../components/Philanthropy/ProgressBar';
import DonateButtons from '../components/Philanthropy/DonateButtons';
import { formatUsd, getActiveCampaign, getProgressPercent } from '../utils/philanthropy';

const Index = () => {
  const activeCampaign = useMemo(() => getActiveCampaign(campaigns), []);
  const [campaignId, setCampaignId] = useState(activeCampaign.id);
  const selectedCampaign = campaigns.find((c) => c.id === campaignId) || activeCampaign;
  const pageDescription = `Support ${organization.philanthropyPartnerName} through ${
    organization.chapterPrimaryName
  } and ${organization.chapterSecondaryName}.`;

  const progressPercent = getProgressPercent(
    selectedCampaign.raisedAmountUsd,
    selectedCampaign.goalAmountUsd,
  );

  return (
    <Main
      title="Donate"
      description={pageDescription}
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">Support {organization.philanthropyPartnerName}</Link>
            </h2>
            <p>
              {organization.chapterPrimaryName} × {organization.chapterSecondaryName} at{' '}
              {organization.campusName}
            </p>
          </div>
        </header>

        <div className="phHero">
          <div className="phHero__left">
            <h3 className="phHero__headline">Help send kids to camp—free of charge.</h3>
            <p className="phHero__subhead">
              SeriousFun is a global network of medical specialty camps serving children with
              serious illnesses and medical conditions.
            </p>
            <ul className="phHero__stats">
              <li>
                <strong>30+</strong> camps worldwide
              </li>
              <li>
                <strong>50+</strong> countries served
              </li>
              <li>
                <strong>100%</strong> nonprofit mission
              </li>
            </ul>
          </div>

          <aside className="donationCard" aria-label="Donation card">
            <div className="donationCard__top">
              <div>
                <div className="donationCard__label">Current campaign</div>
                <div className="donationCard__title">{selectedCampaign.semesterLabel}</div>
                <div className="donationCard__dates">
                  {selectedCampaign.startDate} → {selectedCampaign.endDate}
                </div>
              </div>
              <CampaignPicker
                campaigns={campaigns}
                value={campaignId}
                onChange={setCampaignId}
              />
            </div>

            <div className="donationCard__amountRow">
              <div>
                <div className="donationCard__amount">{formatUsd(selectedCampaign.raisedAmountUsd)}</div>
                <div className="donationCard__muted">raised this semester</div>
              </div>
              <div className="donationCard__right">
                <div className="donationCard__amount">{formatUsd(selectedCampaign.goalAmountUsd)}</div>
                <div className="donationCard__muted">goal</div>
              </div>
            </div>

            <ProgressBar
              percent={progressPercent}
              label={`${selectedCampaign.semesterLabel} progress`}
            />
            <div className="donationCard__updated">Updated {selectedCampaign.updatedAt}</div>

            <DonateButtons donateUrls={selectedCampaign.donateUrls} />

            <div className="donationCard__fineprint">
              Prefer a tax receipt? Use “Direct to SeriousFun”.
            </div>
          </aside>
        </div>

        <section className="phSection">
          <h3>Why SeriousFun?</h3>
          <p>
            SeriousFun Children&apos;s Network supports camps around the world for children with
            serious illnesses—ranging from cancer and blood disorders to neurological,
            immunological, and other complex conditions.
          </p>
          <p>
            Our chapter philanthropy is dedicated to helping make camp possible for kids and
            families who need it most.
          </p>
          <p>
            Learn more on the <Link to="/about">About SeriousFun</Link> page.
          </p>
        </section>

        <p className="phMuted">
          Want to view past fundraising by term? See <Link to="/semesters">Semesters</Link>.
        </p>
      </article>
    </Main>
  );
};

export default Index;
