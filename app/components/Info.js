import React from 'react';
import { Link } from 'react-router';

function Info() {
  return (
    <ul className="faq">
      <button className="btn btn--back" onClick={() => (history.back(-1))}>&larr; Back</button>
      <h1 className="faq__title">Info</h1>
      <li>
        <span className="faq__question">What is a rental resume?</span>
        <p>
          A rental resume is a document intended to market yoursef to a potential landlord.
          Much like a traditional resume it is a high level view of your background and positive characteristics.
          With city living on the rise there has never been a better time to create a rental resume to land the apartment of your dreams.
        </p>
      </li>
      <li>
        <span className="faq__question">Is any of my information stored?</span>
        <p>
          Unlike other online generators, there is absolutely no hidden agenda here.
          There are no logins or ads and most importantly your information is never sent to or stored on a server.
          For your convenience, your resume data is saved to your browser's local storage.
        </p>
      </li>
      <li>
        <span className="faq__question">Why can't the website do this, that or the other thing?</span>
        <p>
          This website was made as a proof of concept by <Link to="http://chrisheninger.com/" target="_blank" rel="noopener noreferrer">Chris Heninger</Link> and <Link to="http://ryanwiemer.com/" target="_blank" rel="noopener noreferrer">Ryan Wiemer</Link>.
          If you have a great idea for a new feature or something to make it better we would love to hear your feedback.
          Feel free to file an issue on our <Link to="https://github.com/chrisheninger/rental-resume.com/issues" target="_blank"> GitHub repository</Link>.
        </p>
      </li>
    </ul>
  );
}
export default Info;
