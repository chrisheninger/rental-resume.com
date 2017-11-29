import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const PageHeader = ({ classes, description, title }) => (
  <div className={classes.root}>
    <div className={classes.wrapper}>
      <h1 className={classes.title}>{title}</h1>
      {description && <p className={classes.description}>{description}</p>}
    </div>
  </div>
);

PageHeader.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default withStyles(theme => ({
  root: {
    backgroundColor: theme.colors.background,
  },
  wrapper: {
    maxWidth: '500px',
    padding: '2em 1em',
    margin: '0 auto',
  },
  title: {
    fontSize: '3em',
    fontWeight: '700',
    lineHeight: '1.2',
  },
  description: {
    color: theme.colors.primaryLight,
    lineHeight: '1.4',
    marginTop: '0.5em',
  },
}))(PageHeader);
