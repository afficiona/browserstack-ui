import { createGlobalStyle } from 'styled-components';

import { getThemeColor } from './utils';

// Any kind of global styles and util styles to be applied to all the UI components.
// For example, ml-1 for margin-left to 1 times the base px, pb-2 for padding-bottom with 2 times the base px, etc.
const BootstrapBaseCss = createGlobalStyle`
  .ml-1 {
    margin-left: 10px;
  }

  body {
    background: ${getThemeColor('danger')}
  }
`;

export { BootstrapBaseCss };
