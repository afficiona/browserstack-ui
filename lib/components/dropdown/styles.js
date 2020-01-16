import styled, { css } from 'styled-components';

const _getContentAlignment = (alignType) => {
  let alignStyle;
  
  switch (alignType) {
    case 'left':
      alignStyle = css`
        left: 0;
        right: auto;
        transform: translateX(0);
      `;
      break;

    case 'right':
      alignStyle = css`
        left: auto;
        right: 0;
        transform: translateX(0%);
      `;
      break;

    default:
      // center aligned
      alignStyle = css`
        left: auto;
        right: 50%;
        transform: translateX(50%);
      `;
  }

  return alignStyle;
}

let mainProps = {};
const StyledDropdown = styled.div`
  ${props => {
    mainProps = { ...props };
  }};
  align-self: auto;
  display: inline-block;
  position: relative;
  display: flex;
`;

const StyledHead = styled.div`
  position: relative;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: ${() => mainProps.noArrow ? '0' : (mainProps.compact ? '10px': '15px')};

  ${() => !mainProps.noArrow && css`
    z-index: 1;
    &:after {
      background-size: 8px 5px;
      height: 5px;
      width: 8px;
    }
  `}

  ${() => !mainProps.noArrow && css`
    &:after {
      background-image: url('https://app-automate-local.bsstag.com/images/react/b74f598c992a9c95b19ebba5d31e3ef8.svg');
      background-repeat: no-repeat;
      background-size: 10px 6.5px;
      content: '';
      height: 6.5px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 10px;
    }
  `}
  

  ${() => mainProps.isOpen && css`
    &:after {
      background-image: url('https://app-automate-local.bsstag.com/images/react/707354e10f6860cd84403fe34abe11eb.svg');
    }
  `}
`;

const StyledContent = styled.div`
  z-index: 9;
  position: absolute;
  top: 150%;

  ${() => _getContentAlignment(mainProps.align)};
`;

export { 
  StyledHead,
  StyledContent
};
export default StyledDropdown;
