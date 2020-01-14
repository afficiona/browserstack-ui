import React from 'react';
import { addParameters, addDecorator, configure } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    hierarchySeparator: '/',
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Source Sans Pro, sans-serif !important;
    color: #111111;
  }
`;

const storyWrapper = (story) => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
);

// automatically import all files ending in *.stories.js
const req = require.context('./../stories', true, /\.stories\.js$/);

function loadStories() {
  addDecorator(storyWrapper);

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
