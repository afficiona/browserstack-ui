// .dropdown {
//   $self: &;

//   #{ $self } __head {
//     position: relative;
//     outline: none;
//     padding - right: 10px; // approx. width of :after
//     cursor: pointer;

//     &: after {
//       background - image: url('~images/automate/img/dd-open.svg');
//       background - repeat: no - repeat;
//       background - size: 10px 6.5px;
//       content: '';
//       height: 6.5px;
//       position: absolute;
//       top: 50 %;
//       right: 0;
//       transform: translateY(-50 %);
//       width: 10px;
//     }

//     &.is - open {
//       &: after {
//         background - image: url('~images/automate/img/dd-close.svg');
//         background - repeat: no - repeat;
//       }
//     }
//   }

//   #{ $self } __content {
//     z - index: 9;
//   }

//   & __head - icon {
//     height: 18px;
//     margin - right: 15px;
//     vertical - align: bottom;
//     width: 16px;
//   }

//   & __head - text {
//     font - size: text - font - size('regular');
//     margin - right: 15px;
//   }

//   & --compact {
//     position: relative;

//     #{ $self } __head {
//       position: relative;
//       z - index: 1; // add z-index so that it appear over notch
//       padding - right: 8px; // approx. width of :after

//       &: after {
//         background - size: 8px 5px;
//         height: 5px;
//         width: 8px;
//       }
//     }

//     #{ $self } __head - icon {
//       margin - right: 5px;
//     }

//     #{ $self } __head - text {
//       margin - right: 5px;
//     }

//     #{ $self } __content {
//       position: absolute;
//       top: 150 %;
//       right: 4px; // half of the width of :after i.e. 4px
//       transform: translateX(50 %);
//     }
//   }

//   & --blue {
//     &.is - open {
//       #{ $self } __head {
//         &: after {
//           background - image: url('~images/automate/img/dd-close-blue.svg');
//           background - repeat: no - repeat;
//         }
//       }

//       #{ $self } __head - icon {
//         fill: #009cfc;
//       }

//       #{ $self } __head - text {
//         color: #009cfc;
//       }
//     }
//   }

//   & --filter {
//     #{ $self } __content {
//       position: absolute;
//       right: 0;
//       top: 101 %; // render marginally below
//       background - color: #f7f7f7;
//       border - radius: 2px;
//       box - shadow: 0 3px 6px 0 rgba(90, 90, 90, 0.37);
//       padding: 20px;
//     }
//   }

//   & --text - caps {
//     #{ $self } __head - text {
//       text - transform: uppercase;
//     }
//   }

//   & --no - arrow {
//     #{ $self } __head {
//       &: after {
//         display: none;
//       }
//     }

//     #{ $self } __content {
//       right: 40px;
//     }
//   }

//   & --left - aligned {
//     .dropdown__head {
//       padding - right: 0;
//     }
//     .dropdown__content {
//       left: 0;
//       right: 0;
//       transform: translateX(0);
//     }
//   }

//   & --feedback {
//     #{ $self } __content {
//       position: absolute;
//       right: 50 %;
//       margin - top: 2px;
//     }
//   }
// }


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
  align-self: baseline;
  display: inline-block;
  ${props => props.compact && css`
    position: relative;
  `}
`;

const StyledHead = styled.div`
  position: relative;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: ${props => props.compact ? '10px': '15px'};

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
