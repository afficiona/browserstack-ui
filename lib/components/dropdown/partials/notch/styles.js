import styled, { css } from 'styled-components';

const _getAlignment = alignType => {
  let alignStyle;
  switch(alignType) {
    case 'left':
      alignStyle = css`
        transform: translate(50%, -100%);
        left: 0;
      `;
      break;

    case 'right':
      alignStyle = css`
        transform: translate(-50%, -100%);
        right: 0;
      `;
      break;

    default:
      alignStyle = css`
        transform: translate(-50%, -100%);
        left: 50%;
      `;
  }

  return alignStyle;
}

const Styled = styled.div`
  width: 20px;
  height: 9px;
  position: absolute;
  overflow: hidden;
  top: 0;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    transform: translateX(-50%) rotate(45deg);
    top: 50%;
    left: 50%;
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.6);
  }

  ${props => _getAlignment(props.align)}
`;

export default Styled;
