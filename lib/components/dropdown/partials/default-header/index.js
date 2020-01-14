import React from 'react';
import PropTypes from 'prop-types';

import { Row } from './../../../utils';
import icons from './../../../../assets/icons/filters.svg';
import { StyledIconSVG, StyledTitle } from './styles';

const DefaultHeader = ({icon, title, uppercase}) => (
  <Row center>
    {icon && (
      <StyledIconSVG>
        <use xlinkHref={`${icons}#${icon}`} />
      </StyledIconSVG>
    )}
    <StyledTitle uppercase={uppercase}>{title}</StyledTitle>
  </Row>
);

DefaultHeader.propTypes = {
  icon: PropTypes.string
};

export default DefaultHeader;
