import React from 'react';

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
        <input className="input input--full-name" placeholder="Full Name*" type="text" value={person.name} onChange={(event) => onInputChange(event.target.value, ['people', index, 'name'])} />
        <input className="input input--email" placeholder="Email*" type="text" value={person.email} onChange={(event) => onInputChange(event.target.value, ['people', index, 'email'])} />
        <input className="input input--phone" placeholder="Phone Number*" type="text" value={person.phone} onChange={(event) => onInputChange(event.target.value, ['people', index, 'phone'])} />
        { index > 0 ? (
          <button
            className="btn btn--remove icon-cross"
            onClick={(event) => onRemoveSection(event, 'people', index)}
          >
          </button>
        ) : null }
      </li>
    );
  }

  render() {
    const { people, onAddSection } = this.props;
    return (
      <fieldset id="contact" className="fieldset fieldset--contact">
        <legend className="legend legend--contact">Contact</legend>
        <label className="label label--contact">Let's start with the basics. First fill out the relevant contact information for the people that would live in the apartment.</label>
        <img className="img img--contact" src={contactImage} />
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
