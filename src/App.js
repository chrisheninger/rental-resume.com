import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import store from 'store2';
import { tryParseJSON } from './util/helpers';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Applicant from './pages/Applicant';
import Summary from './pages/Summary';
import RentalHistory from './pages/RentalHistory';
import EmploymentHistory from './pages/EmploymentHistory';
import Income from './pages/Income';
import Preview from './pages/Preview';

const defaultState = {
  people: [
    {
      name: '',
      email: '',
      phone: '',
    },
  ],
  summary: '',
  rentalHistory: [
    {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      dateStart: '',
      dateEnd: '',
      reason: '',
    },
  ],
  employmentHistory: [
    {
      company: '',
      title: '',
      dateStart: '',
      dateEnd: '',
    },
  ],
  income: '',
};

class App extends Component {
  constructor(props) {
    super(props);

    const fromSaveLink = tryParseJSON(props.location && props.location.search);
    if (fromSaveLink) {
      this.state = fromSaveLink;
    } else {
      this.state = store.get('data') || defaultState;
    }
  }

  componentDidMount() {
    store.set('data', this.state);
  }

  onInputChange = (value, key) => {
    const newState = cloneDeep(this.state);
    set(newState, key, value);
    this.setState(newState);
    store.set('data', newState);
  };

  onAddSection = (event, section) => {
    event.preventDefault();
    const newState = { ...this.state };
    newState[section].push(defaultState[section][0]);
    this.setState(newState);
    store.set('data', newState);
  };

  onRemoveSection = (event, section, index) => {
    event.preventDefault();
    const newState = { ...this.state };
    newState[section].splice(index, 1);
    this.setState(newState);
    store.set('data', newState);
  };

  toggleMenu() {
    const app = document.getElementById('root');
    app.classList.toggle('toggle--active');
  }

  closeMenu() {
    const app = document.getElementById('root');
    app.classList.remove('toggle--active');
  }

  printResume = () => {
    const app = document.getElementById('root');
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
  };

  generateResumeLink = event => {
    event.preventDefault();
    console.log(
      `${window.location.href}/?data=${encodeURIComponent(
        JSON.stringify(this.state)
      )}`
    );
  };

  render() {
    return (
      <div>
        {this.props.location.pathname !== '/' ? (
          <Header
            {...this.props}
            generateResumeLink={this.generateResumeLink}
            printResume={this.printResume}
            toggleMenu={this.toggleMenu}
            closeMenu={this.closeMenu}
          />
        ) : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About {...this.props} closeMenu={this.closeMenu} />
          </Route>
          <Route path="/applicant">
            <Applicant
              {...this.props}
              people={this.state.people}
              onInputChange={this.onInputChange}
              onAddSection={this.onAddSection}
              onRemoveSection={this.onRemoveSection}
            />
          </Route>
          <Route path="/summary">
            <Summary
              {...this.props}
              summary={this.state.summary}
              onInputChange={this.onInputChange}
            />
          </Route>
          <Route path="/rental-history">
            <RentalHistory
              {...this.props}
              rentalHistory={this.state.rentalHistory}
              onInputChange={this.onInputChange}
              onAddSection={this.onAddSection}
              onRemoveSection={this.onRemoveSection}
            />
          </Route>
          <Route path="/employment-history">
            <EmploymentHistory
              {...this.props}
              employmentHistory={this.state.employmentHistory}
              onInputChange={this.onInputChange}
              onAddSection={this.onAddSection}
              onRemoveSection={this.onRemoveSection}
            />
          </Route>
          <Route path="/income">
            <Income
              {...this.props}
              income={this.state.income}
              onInputChange={this.onInputChange}
              onAddSection={this.onAddSection}
              onRemoveSection={this.onRemoveSection}
            />
          </Route>
          <Route path="/preview">
            <Preview
              {...this.props}
              people={this.state.people}
              summary={this.state.summary}
              rentalHistory={this.state.rentalHistory}
              employmentHistory={this.state.employmentHistory}
              income={this.state.income}
              printResume={this.printResume}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
