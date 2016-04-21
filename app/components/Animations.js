import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Animations extends React.Component {
  render() {
    const transitionNames = {
      enter: 'transition--enter',
      enterActive: 'is-active',
      appear: 'transition--enter',
      appearActive: 'is-active',
    };
    return (
      <ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={400} transitionLeave={false} transitionEnterTimeout={400} component="div" transitionName={transitionNames}>
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
}

Animations.propTypes = {
  children: React.PropTypes.object,
};

export default Animations;
