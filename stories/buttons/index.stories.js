import React from 'react';
import { withKnobs, text, radios, boolean, object } from "@storybook/addon-knobs";
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Button } from '../../lib/components';

const colorOptions = {
  'Primary': 'primary',
  'Warning': 'warning',
  'Danger': 'danger',
  'Success': 'success'
};

const sizeOptions = {
  'Default': 'default',
  'Large': 'lg',
  'Small': 'sm'
};

const stories = storiesOf('Button', module)
  .add('Configurations', () => {
    const themeOptions = {
      colorScheme: {
        primary: text('Primary', 'blue', 'Config Theme'),
        warning: text('Warning', 'orange', 'Config Theme'),
        danger: text('Danger', 'red', 'Config Theme'),
        success: text('Success', 'green', 'Config Theme')
      }
    };
    const colorScheme = radios('Theme', colorOptions, colorOptions.Primary, 'Color');
    const size = radios('Size', sizeOptions, sizeOptions.Default, 'Size');
    const outline = boolean('Outline', false, 'Outline');
    return (
      <ThemeProvider theme={themeOptions}>
        <Button
          bgDanger
          lg={size === 'lg'}
          sm={size === 'sm'}
          outline={!!outline}
          primary={colorScheme === 'primary'}
          warning={colorScheme === 'warning'}
          danger={colorScheme === 'danger'}
          success={colorScheme === 'success'}
        >
          {colorScheme.toUpperCase()}
        </Button>
      </ThemeProvider>
    )
  })
  .add('All options', () => (
    <div>
      <Button primary>Primary</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
      <Button success>Success</Button>
      <br/>
      <br/>
      <Button primary sm>Warning</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
      <Button success lg>Warning</Button>
      <br/>
      <br/>
      <Button outline primary>Primary</Button>
      <Button outline warning>Warning</Button>
      <Button outline danger>Danger</Button>
      <Button outline success>Success</Button>
    </div>
  ));

stories.addDecorator(withKnobs);