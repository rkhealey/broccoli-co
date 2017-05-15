import classNames from 'classnames';
import React, { PropTypes } from 'react';

const Icon = ({ className, name, pulse }) => (
  <i
    className={
      classNames(
        'fa',
        `fa-${name}`,
        { 'fa-pulse': pulse },
        className,
      )
    }
    aria-hidden="true"
  />
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  pulse: PropTypes.bool,
};

Icon.defaultProps = {
  className: null,
  pulse: false,
};

export default Icon;
