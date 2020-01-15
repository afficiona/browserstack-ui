import styled, { css } from 'styled-components';
import { getColor } from './../../../../utils';

const StyledIconSVG = styled.svg`
  width: 12px;
  height: 12px;
  margin-right: 4px;
  fill: ${props => props.isOpen ? getColor({primary: true}, 'globals', 'color'): '#000'};
`;

const StyledTitle = styled.span`
  font-size: 14px;
  margin-right: 15px;
  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}

  ${props => props.isOpen && css`
    color: ${getColor({primary: true}, 'globals', 'color')}
  `}
`;

export {
  StyledIconSVG,
  StyledTitle
};
