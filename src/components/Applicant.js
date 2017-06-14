import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MaskedTextInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

class Applicant extends Component {
  renderPerson = (person, index) => {
    const { onInputChange, onRemoveSection } = this.props;
    return (
      <li key={index}>
        <input
          id={`name${index > 0 ? `-contact-section-${index}` : ''}`}
          className="input input--full-name"
          name="name"
          autoComplete="name"
          placeholder="Full Name*"
          type="text"
          value={person.name}
          onChange={event =>
            onInputChange(event.target.value, ['people', index, 'name'])}
        />
        <MaskedTextInput
          mask={emailMask}
          id={`email${index > 0 ? `-contact-section-${index}` : ''}`}
          className="input input--email"
          name="email"
          autoComplete="email"
          placeholder="Email*"
          type="text"
          value={person.email}
          onChange={event =>
            onInputChange(event.target.value, ['people', index, 'email'])}
        />
        <MaskedTextInput
          mask={[
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          placeholderChar={'\u2000'}
          id={`tel${index > 0 ? `-contact-section-${index}` : ''}`}
          className="input input--phone"
          name="tel"
          autoComplete="home tel"
          placeholder="Phone Number*"
          type="tel"
          value={person.phone}
          onChange={event =>
            onInputChange(event.target.value, ['people', index, 'phone'])}
        />
        {index > 0
          ? <button
              id={`remove-contact-section-${index}`}
              className="btn btn--remove"
              onClick={event => onRemoveSection(event, 'people', index)}
            >
              <span />
            </button>
          : null}
      </li>
    );
  };

  render() {
    const { people, onAddSection, toggleHeader } = this.props;
    return (
      <section className="page">
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Applicant</h1>
            <p className="page__subtitle">
              Let's start with the basics.
              First fill out the relevant contact information for the people
              that would live in the apartment.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
          </div>
        </div>
        <fieldset id="contact" className="fieldset fieldset--contact">
          <ol className="ol ol--applicant">
            {people.map(this.renderPerson)}
            <button
              className="btn btn--add"
              onClick={event => onAddSection(event, 'people')}
            >
              Add Another Person
            </button>
          </ol>
          <Link to="/summary" title="Summary" className="page__link">
            Continue...
          </Link>
        </fieldset>
      </section>
    );
  }
}

Applicant.propTypes = {
  people: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func,
};

export default Applicant;
