import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import StyledNotch from './styles';

const Notch = ({ align }) => <StyledNotch align={align} />;

Notch.propTypes = {
  align: PropTypes.string
};

export default Notch;
