import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${props => props.center && css`
    align-items: center;
  `}

  ${props => props.reverse && css`
    flex-direction: row-reverse;
  `}
`;

export {
  Row
};
