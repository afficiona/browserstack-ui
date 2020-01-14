import styled, { css } from 'styled-components';

const Styled = styled.div`
  width: 20px;
  height: 9px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  overflow: hidden;

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
`;

export default Styled;
