import React from 'react';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';

import backgroundImage from '../images/homepage.jpg';

function Home({ classes }) {
  return (
    <main className={classes.root}>
      <section className={classes.container}>
        <h2 className={classes.headline}>
          From SF to NY create a rental resume to show your future landlord what
          sets you apart.
        </h2>
        <Link to="/about" className="btn btn--learn-more">
          Learn More
        </Link>
        <Link to="/applicant" className="btn btn--get-started">
          Get Started
        </Link>
      </section>
    </main>
  );
}
export default withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',

    '&:before': {
      content: '""',
      height: '100%',
      width: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: '-2',
    },

    '&:after': {
      content: '""',
      height: '100%',
      width: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: '#334050',
      opacity: '.9',
      zIndex: '-1',
    },
  },
  container: {
    maxWidth: '640px',
    padding: '0 1em',
    margin: '0 auto',
  },
  headline: {
    // fontSize: '2.25em', // todo: media query for medium+
    fontSize: '1.75em',
    lineHeight: '1.15',
    color: 'white',
    margin: '0 0 1em 0',
  },
}))(Home);
