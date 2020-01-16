import styled, { css } from 'styled-components';
import { getColor } from './../../../../utils';

const StyledIconSVG = styled.svg`
  width: 15px;
  height: 18px;
  margin-right: ${props => props.compact ? '5px' : '15px'};
  fill: ${props => props.isOpen && props.primary ? getColor({primary: true}, 'globals', 'color'): '#000'};
`;

const StyledTitle = styled.span`
  font-size: 14px;
  margin-right: ${props => props.compact ? '5px' : '15px'};
  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}

  ${props => props.isOpen && props.primary && css`
    color: ${getColor({primary: true}, 'globals', 'color')}
  `}
`;

export {
  StyledIconSVG,
  StyledTitle
};
