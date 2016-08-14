import React from 'react';
import InputMask from 'react-input-mask';

const contactImage = require('../assets/images/contact.jpg');

class ContactInformation extends React.Component {

  constructor() {
    super();

    this.renderPerson = this.renderPerson.bind(this);
  }

  renderPerson(person, index) {
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
          onChange={(event) => onInputChange(event.target.value, ['people', index, 'name'])}
        />
        <input
          id={`email${index > 0 ? `-contact-section-${index}` : ''}`}
          className="input input--email"
          name="email"
          autoComplete="email"
          placeholder="Email*"
          type="email"
          value={person.email}
          onChange={(event) => onInputChange(event.target.value, ['people', index, 'email'])}
        />
        <InputMask
          id={`tel${index > 0 ? `-contact-section-${index}` : ''}`}
          className="input input--phone"
          name="tel"
          autoComplete="home tel"
          placeholder="Phone Number*"
          type="text"
          value={person.phone}
          mask="(999) 999-9999"
          maskChar=" "
          onChange={(event) => onInputChange(event.target.value, ['people', index, 'phone'])}
        />
        {index > 0 ? (
          <button
            id={`remove-contact-section-${index}`}
            className="btn btn--remove icon-cross"
            onClick={(event) => onRemoveSection(event, 'people', index)}
          />
        ) : null}
      </li>
    );
  }

  render() {
    const { people, onAddSection } = this.props;
    return (
      <fieldset id="contact" className="fieldset fieldset--contact">
        <legend className="legend legend--contact">
          Contact
        </legend>
        <label htmlFor="name" className="label label--contact">
          Let's start with the basics.
          First fill out the relevant contact information for the people that would live in the apartment.
        </label>
        <img
          id="contact-section-image"
          className="img img--contact"
          src={contactImage}
          alt="Contact information section"
        />
        <ol className="ol ol--contact">
          {people.map(this.renderPerson)}
          <button
            className="btn btn--add"
            onClick={(event) => onAddSection(event, 'people')}
          >
            Add Another Person
          </button>
        </ol>
      </fieldset>
    );
  }

}

ContactInformation.propTypes = {
  people: React.PropTypes.array,
  onInputChange: React.PropTypes.func,
  onAddSection: React.PropTypes.func,
  onRemoveSection: React.PropTypes.func,
};

export default ContactInformation;
