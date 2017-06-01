import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Animations({ children, location }) {
  const transitionNames = {
    enter: 'transition--enter',
    enterActive: 'is-active',
    appear: 'transition--enter',
    appearActive: 'is-active',
  };

  return (
    <ReactCSSTransitionGroup
      transitionAppear
      transitionAppearTimeout={400}
      transitionLeave={false}
      transitionEnterTimeout={400}
      transitionName={transitionNames}
      component="div"
    >
      {React.cloneElement(children, {
        key: location.pathname,
      })}
    </ReactCSSTransitionGroup>
  );
}

Animations.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default Animations;
