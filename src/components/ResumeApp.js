/* globals window, document */
import React from 'react';
import PropTypes from 'prop-types';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import store from 'store2';
import { tryParseJSON } from '../util/helpers';

import Header from './Header';
import About from './About';
import Applicant from './Applicant';
import Summary from './Summary';
import RentalHistory from './RentalHistory';
import EmploymentHistory from './EmploymentHistory';
import Income from './Income';
import Preview from './Preview';

class ResumeApp extends React.Component {

  constructor() {
    super();

    this.defaultState = {
      people: [{
        name: '',
        email: '',
        phone: '',
      }],
      summary: '',
      rentalHistory: [{
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        dateStart: '',
        dateEnd: '',
        reason: '',
      }],
      employmentHistory: [{
        company: '',
        title: '',
        dateStart: '',
        dateEnd: '',
      }],
      income: '',
    };
    this.state = store.get('data') || this.defaultState;

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddSection = this.onAddSection.bind(this);
    this.onRemoveSection = this.onRemoveSection.bind(this);
    this.printResume = this.printResume.bind(this);
    this.generateResumeLink = this.generateResumeLink.bind(this);
  }

  componentWillMount() {
    if (tryParseJSON(this.props.location.query.data)) {
      this.setState(JSON.parse(this.props.location.query.data));
    }
  }

  componentDidMount() {
    store.set('data', this.state);
  }

  onInputChange(value, key) {
    const newState = cloneDeep(this.state);
    set(newState, key, value);
    this.setState(newState);
    store.set('data', newState);
  }

  onAddSection(event, section) {
    event.preventDefault();
    const newState = cloneDeep(this.state);
    newState[section].push(this.defaultState[section][0]);
    this.setState(newState);
    store.set('data', newState);
  }

  onRemoveSection(event, section, index) {
    event.preventDefault();
    const newState = cloneDeep(this.state);
    newState[section].splice(index, 1);
    this.setState(newState);
    store.set('data', newState);
  }

  toggleMenu() {
    const app = document.getElementById('app');
    app.classList.toggle('toggle--active');
  }

  toggleHeader() {
    const app = document.getElementById('app');
    app.classList.toggle('btn--header--active');
  }

  closeMenu() {
    const app = document.getElementById('app');
    app.classList.remove('toggle--active');
  }

  printResume() {
    const app = document.getElementById('app');
    if (this.props.location.pathname !== '/preview') {
      this.context.router.push('/preview');
      setTimeout(() => {
        app.classList.remove('toggle--active');
        window.print();
      }, 500);
    } else {
      app.classList.remove('toggle--active');
      window.print();
    }
  }

  generateResumeLink(event) {
    event.preventDefault();
    console.log(`/?data=${encodeURIComponent(JSON.stringify(this.state))}`);
  }

  renderPage() {
    const pageMap = {
      '/about': 'About',
      '/preview': 'Preview',
      '/applicant': 'Applicant',
      '/summary': 'Summary',
      '/rental-history': 'RentalHistory',
      '/employment-history': 'EmploymentHistory',
      '/income': 'Income',
    };
    switch (pageMap[this.props.location.pathname]) {
      case 'About':
        return (
          <About
            {...this.props}
            toggleHeader={this.toggleHeader}
            closeMenu={this.closeMenu}
          />
        );
      case 'Applicant':
        return (
          <Applicant
            {...this.props}
            people={this.state.people}
            onInputChange={this.onInputChange}
            onAddSection={this.onAddSection}
            onRemoveSection={this.onRemoveSection}
            toggleHeader={this.toggleHeader}
          />
        );
      case 'Summary':
        return (
          <Summary
            {...this.props}
            summary={this.state.summary}
            onInputChange={this.onInputChange}
            toggleHeader={this.toggleHeader}
          />
        );
      case 'RentalHistory':
        return (
          <RentalHistory
            {...this.props}
            rentalHistory={this.state.rentalHistory}
            onInputChange={this.onInputChange}
            onAddSection={this.onAddSection}
            onRemoveSection={this.onRemoveSection}
            toggleHeader={this.toggleHeader}
          />
        );
      case 'EmploymentHistory':
        return (
          <EmploymentHistory
            {...this.props}
            employmentHistory={this.state.employmentHistory}
            onInputChange={this.onInputChange}
            onAddSection={this.onAddSection}
            onRemoveSection={this.onRemoveSection}
            toggleHeader={this.toggleHeader}
          />
        );
      case 'Income':
        return (
          <Income
            {...this.props}
            income={this.state.income}
            onInputChange={this.onInputChange}
            onAddSection={this.onAddSection}
            onRemoveSection={this.onRemoveSection}
            toggleHeader={this.toggleHeader}
          />
        );
      case 'Preview':
        return (
          <Preview
            {...this.props}
            people={this.state.people}
            summary={this.state.summary}
            rentalHistory={this.state.rentalHistory}
            employmentHistory={this.state.employmentHistory}
            income={this.state.income}
            toggleHeader={this.toggleHeader}
            printResume={this.printResume}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <Header
          {...this.props}
          printResume={this.printResume}
          toggleMenu={this.toggleMenu}
          closeMenu={this.closeMenu}
        />
        <main className="transition">
          {this.renderPage()}
        </main>
      </div>
    );
  }

}

ResumeApp.propTypes = {
  location: PropTypes.object.isRequired,
};

ResumeApp.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ResumeApp;
