/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';
import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

describe('renders the app', () => {
  // mocks the fetch API used on the about page.
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));
  // mocks the scrollTo API used when navigating to a new page.
  window.scrollTo = jest.fn();

  let container;

  beforeEach(async () => {
    window.history.pushState({}, '', '/');
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      await ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toContain('Donate |');
  });

  it('can navigate to /about', async () => {
    expect.assertions(6);
    const aboutLink = document.querySelector('a[href="/about"]');
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      await aboutLink.click();
    });
    expect(document.title).toContain('About SeriousFun |');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenNthCalledWith(1, 0, 0);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(textMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /semesters', async () => {
    expect.assertions(3);
    const semestersLink = document.querySelector('a[href="/semesters"]');
    expect(semestersLink).toBeInTheDocument();
    await act(async () => {
      await semestersLink.click();
    });
    expect(document.title).toContain('Semesters |');
    expect(window.location.pathname).toBe('/semesters');
  });

  it('can navigate to /faq', async () => {
    expect.assertions(3);
    const faqLink = document.querySelector('a[href="/faq"]');
    expect(faqLink).toBeInTheDocument();
    await act(async () => {
      await faqLink.click();
    });
    expect(document.title).toContain('FAQ |');
    expect(window.location.pathname).toBe('/faq');
  });

  it('can navigate to /contact', async () => {
    expect.assertions(3);
    const contactLink = document.querySelector('a[href="/contact"]');
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      await contactLink.click();
    });
    expect(document.title).toContain('Contact |');
    expect(window.location.pathname).toBe('/contact');
  });
});
