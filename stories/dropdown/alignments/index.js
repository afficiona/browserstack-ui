import React from 'react';
import { withKnobs, text, radios, boolean, object } from "@storybook/addon-knobs";
import { ThemeProvider } from 'styled-components';

import Left from './left';
import Right from './right';
import Center from './center';

import './styles.scss';

const AlignentStory = () => {
  return (
    <>
      <div className="row">
        <Left />
      </div>
      <div className="row center">
        <Center />
      </div>
      <div className="row right">
        <Right />
      </div> 
    </>
  )
};

export default AlignentStory;
