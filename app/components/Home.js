import React from 'react';
import { Link } from 'react-router';

function Home({ closeMenu }) {
  return (
    <main className="transition">
      <section className="home">
        <div className="home__text">
          <h2 className="home__text__title">From SF to NY create a rental resume to show your future landlord what sets you apart.</h2>
          <Link to="/about" className="btn btn--learn-more" onClick={closeMenu}>Learn More</Link>
          <Link to="/applicant" className="btn btn--get-started" onClick={closeMenu}>Get Started</Link>
        </div>
      </section>
    </main>
  );
}

Home.propTypes = {
  closeMenu: React.PropTypes.func,
};

export default Home;
