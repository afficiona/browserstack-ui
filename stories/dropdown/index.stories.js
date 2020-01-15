import React from 'react';
import { withKnobs, text, radios, boolean, object } from "@storybook/addon-knobs";
import { storiesOf } from '@storybook/react';

import ConfigurableDropdown from './configurable';
import ContentAlignments from './alignments';

const stories = storiesOf('Dropdown', module)
  .add('Configurable', ConfigurableDropdown)
  .add('Alignments', ContentAlignments)
  ;

stories.addDecorator(withKnobs);
