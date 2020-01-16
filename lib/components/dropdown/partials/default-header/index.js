import React from 'react';
import PropTypes from 'prop-types';

import { Row } from './../../../utils';
import icons from './../../../../assets/icons/all.svg';
import { StyledIconSVG, StyledTitle } from './styles';

const DefaultHeader = (props) => (
  <Row center>
    {props.icon && (
      <StyledIconSVG {...props}>
        <use xlinkHref={`${icons}#${props.icon}`} />
      </StyledIconSVG>
    )}
    <StyledTitle {...props}>{props.title}</StyledTitle>
  </Row>
);

DefaultHeader.propTypes = {
  icon: PropTypes.string
};

export default DefaultHeader;
