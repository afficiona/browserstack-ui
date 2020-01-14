import React from 'react';
import { withKnobs, text, radios, boolean, object } from "@storybook/addon-knobs";
import { ThemeProvider } from 'styled-components';
import { Button, Dropdown } from '../../../lib/components';

import './styles.scss';

const SimpleDropdown = () => {
  const themeOptions = {
    colorScheme: {
      primary: text('Primary', '#009cfc', 'Config Theme'),
      warning: text('Warning', 'orange', 'Config Theme'),
      danger: text('Danger', 'red', 'Config Theme'),
      success: text('Success', 'green', 'Config Theme')
    }
  };
  const DropdownHeader = (<Button primary outline sm>Click Me</Button>)

  return (
    <ThemeProvider theme={themeOptions}>
      <Dropdown
        headerElement={DropdownHeader}
        title='Click Me!'
        modifiers={['compact', 'left-aligned', 'no-arrow']}
        showNotch
        isLeftAligned
        icon='filters'
        onToggleDropdown={() => this.toggleResultDropdown()}
      >
        <ul className="more-fields">
          <li>
            <a
              href={`https://www.browserstack.com/contact?session_id=`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Contact Support
              </a>
          </li>
          <li>
            <a
              href={`https://www.browserstack.com/contact?session_id=`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Delete Session
              </a>
          </li>
        </ul>
      </Dropdown>
    </ThemeProvider>
  )
}

export default SimpleDropdown;
