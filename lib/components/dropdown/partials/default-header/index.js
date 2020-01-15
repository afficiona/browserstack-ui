import React from 'react';
import PropTypes from 'prop-types';

import { Row } from './../../../utils';
import icons from './../../../../assets/icons/all.svg';
import { StyledIconSVG, StyledTitle } from './styles';

const DefaultHeader = ({icon, title, uppercase, isOpen}) => (
  <Row center>
    {icon && (
      <StyledIconSVG isOpen={isOpen}>
        <use xlinkHref={`${icons}#${icon}`} />
      </StyledIconSVG>
    )}
    <StyledTitle uppercase={uppercase} isOpen={isOpen}>{title}</StyledTitle>
  </Row>
);

DefaultHeader.propTypes = {
  icon: PropTypes.string
};

export default DefaultHeader;
