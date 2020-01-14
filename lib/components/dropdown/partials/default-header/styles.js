import styled, { css } from 'styled-components';

import './../../../../assets/icons/filters.svg';

const StyledIconSVG = styled.svg`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;

const StyledTitle = styled.span`
  font-size: 14px;
  margin-right: 15px;
  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`;

export {
  StyledIconSVG,
  StyledTitle
};
