/* globals history */
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="page">
      <div className="page__header">
        <div className="page__header__container">
          <h1 className="page__title">About</h1>
        </div>
      </div>
      <ul className="faq">
        <li>
          <span className="faq__question">What is a rental resume?</span>
          <p>
            A rental resume is a document intended to market yourself to a
            potential landlord. Much like a traditional resume it is a high
            level view of your background and positive characteristics. With
            city living on the rise there has never been a better time to create
            a rental resume to land the apartment of your dreams.
          </p>
        </li>
        <li>
          <span className="faq__question">
            Is any of my information stored?
          </span>
          <p>
            Unlike other online generators, there is absolutely no hidden agenda
            here. There are no logins or ads and most importantly your
            information is never sent to or stored on a server. For your
            convenience, your resume data is saved to your browser's local
            storage.
          </p>
        </li>
        <li>
          <span className="faq__question">
            Why can't the website do this, that or the other thing?
          </span>
          <p>
            This website was made as a proof of concept by{" "}
            <Link
              to="https://chrisheninger.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris Heninger
            </Link>{" "}
            and{" "}
            <Link
              to="http://ryanwiemer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ryan Wiemer
            </Link>
            . If you have a great idea for a new feature or something to make it
            better we would love to hear your feedback. Feel free to file an
            issue on our{" "}
            <Link
              to="https://github.com/chrisheninger/rental-resume.com/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub repository
            </Link>
            .
          </p>
        </li>
        <Link
          to="/applicant"
          title="Applicant"
          className="page__link page__link--about"
        >
          Get Started
        </Link>
      </ul>
    </section>
  );
}
export default About;
