import React from 'react';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import store from 'store2';
import { tryParseJSON } from '../util/helpers';

import Header from './Header';
import Info from './Info';
import Create from './Create';
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

    this.renderPage = this.renderPage.bind(this);
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

  printResume() {
    if (this.props.location.pathname !== '/preview') {
      this.context.router.push('/preview');
      setTimeout(() => (window.print()), 250);
    } else {
      window.print();
    }
  }

  generateResumeLink(event) {
    event.preventDefault();
    console.log(`/?data=${encodeURIComponent(JSON.stringify(this.state))}`);
  }

  renderPage() {
    const pageMap = {
      '/info': 'Info',
      '/create': 'Create',
      '/preview': 'Preview',
    };
    switch (pageMap[this.props.location.pathname]) {
      case 'Info':
        return (
          <Info
            {...this.props}
          />
        );
      case 'Create':
        return (
          <Create
            {...this.props}
            people = {this.state.people}
            summary = {this.state.summary}
            rentalHistory = {this.state.rentalHistory}
            employmentHistory = {this.state.employmentHistory}
            income = {this.state.income}
            onInputChange = {this.onInputChange}
            onAddSection = {this.onAddSection}
            onRemoveSection = {this.onRemoveSection}
          />
        );
      case 'Preview':
        return (
          <Preview
            {...this.props}
            people = {this.state.people}
            summary = {this.state.summary}
            rentalHistory = {this.state.rentalHistory}
            employmentHistory = {this.state.employmentHistory}
            income = {this.state.income}
          />
        );
      default:
        break;
    }
  }

  render() {
    return (
        <div>
          <Header
            {...this.props}
            printResume = {this.printResume}
          />
          <main className="transition">
            {this.renderPage()}
          </main>
        </div>
    );
  }

}

ResumeApp.propTypes = {
  location: React.PropTypes.object.isRequired,
};

ResumeApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default ResumeApp;
