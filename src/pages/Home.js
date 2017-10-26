import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="home">
        <div className="home__text">
          <h2 className="home__text__title">
            From SF to NY create a rental resume to show your future landlord
            what sets you apart.
          </h2>
          <Link to="/about" className="btn btn--learn-more">
            Learn More
          </Link>
          <Link to="/applicant" className="btn btn--get-started">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
