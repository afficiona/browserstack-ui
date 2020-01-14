import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import StyledNotch from './styles';

const Notch = ({ state }) => <StyledNotch className={classNames('notch', `notch--${state}`)} />;

Notch.propTypes = {
  state: PropTypes.string
};

Notch.defaultProps = {
  state: ''
};

export default Notch;
