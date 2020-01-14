import React from 'react';
import { withKnobs, text, radios, boolean, object } from "@storybook/addon-knobs";
import { storiesOf } from '@storybook/react';

import SimpleDropdown from './simple';

const stories = storiesOf('Dropdown', module)
  .add('Simple', SimpleDropdown)
  ;

stories.addDecorator(withKnobs);
