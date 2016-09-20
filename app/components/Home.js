import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <main className="transition">
      <section className="home">
        <div className="home__text">
          <h2 className="home__text__title">From SF to NY create a rental resume to show your future landlord what sets you apart.</h2>
          <Link to="/intro" className="btn btn--learn-more">Get Started</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
