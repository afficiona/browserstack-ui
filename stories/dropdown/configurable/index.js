import React from 'react';
import { withKnobs, text, select, radios, boolean, object } from "@storybook/addon-knobs";
import { Button, Dropdown } from '../../../lib/components';

import './styles.scss';

const alignmentOptions = {
  'Center (default)': 'center', // Default
  'Left': 'left',
  'Right': 'right',
};

const iconOptions = {
  'Filters': 'filters', // Default
  'Access Key': 'access-key'
}

const KnobsID = 'config-options';

const ConfigDropdown = () => {
  // config options
  const isOpen = boolean('Is Dropdown Open', false, KnobsID);
  const toShowCustomHeader = boolean('Show Custom Header', false, KnobsID);
  const title = text('Title', 'Click Me', KnobsID);
  const toShowNotch = boolean('Show Notch', true, KnobsID);
  const toShowArrow = boolean('Show Arrow', true, KnobsID);
  const alignment = radios('Dropdown Alignment', alignmentOptions, alignmentOptions.Center, KnobsID);
  const isTitleUppercase = boolean('Is Title uppercase', true, KnobsID);
  const iconValue = select('Select Icon for Header', iconOptions, iconOptions.Filters, KnobsID);

  const DropdownHeader = <Button primary outline lg>{title}</Button>;
  
  return (
    <div className="config-row">
      <Dropdown
        headerElement={toShowCustomHeader && DropdownHeader}
        noArrow={!toShowArrow}
        uppercase={isTitleUppercase}
        isOpen={isOpen}
        title={title}
        align={alignment}
        showNotch={toShowNotch}
        icon={iconValue}
        onToggleDropdown={() => this.toggleResultDropdown()}
      >
        <div class="feedback-form">
          <span class="feedback-form__text">
            Share your thoughts on our new dashboard
          <span class="feedback-form__required">*</span>
          </span>
          <textarea class="feedback-form__feedback"></textarea>
          <Button danger sm className="feedback-form__cancel-button">Cancel</Button>
          <Button primary sm>Submit</Button>
        </div>
      </Dropdown>
    </div>
  )
}

export default ConfigDropdown;
