import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
import faq from '../data/philanthropy/faq';

const Faq = () => (
  <Main title="FAQ" description="Donation and fundraising FAQs.">
    <article className="post" id="faq">
      <header>
        <div className="title">
          <h2>
            <Link to="/faq">FAQ</Link>
          </h2>
          <p>Answers to the most common donation questions.</p>
        </div>
      </header>

      <div className="faqList">
        {faq.map((item) => (
          <section key={item.question} className="faqItem">
            <h3 className="faqItem__question">{item.question}</h3>
            <div className="markdown faqItem__answer">
              <Markdown>{item.answer}</Markdown>
            </div>
          </section>
        ))}
      </div>
    </article>
  </Main>
);

export default Faq;
