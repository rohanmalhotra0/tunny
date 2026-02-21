import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import organization from '../data/philanthropy/organization';

const Contact = () => (
  <Main
    title="Contact"
    description={`Contact ${organization.chapterPrimaryName} × ${organization.chapterSecondaryName} philanthropy.`}
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Want to sponsor, match, or collaborate? Email us at:</p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
