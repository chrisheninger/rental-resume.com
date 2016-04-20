import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends React.Component {
  render() {
    const transitionNames = {
       enter:         'transition--enter',
       enterActive:   'is-active',
       appear:        'transition--enter',
       appearActive:  'is-active'
    };
    return (
      <ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={400} transitionLeave={false} transitionEnterTimeout={400} component="div" transitionName={transitionNames}>
         <main className="transition">
          <section className="home">
            <div className="home__text">
              <h2 className="home__text__title">From SF to NY create a rental resume to show your future landlord what sets you apart.</h2>
              <Link to="/info" className="btn btn--learn-more">Learn More</Link>
              <Link to="/create" className="btn btn--get-started">Get Started</Link>
            </div>
          </section>
        </main>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
