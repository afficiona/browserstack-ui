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
  const toShowCustomHeader = boolean('Show Custom Header', true, KnobsID);
  const title = text('Title', 'Click Me', KnobsID);
  const isPrimary = boolean('Is Primary', true, KnobsID);
  const toShowNotch = boolean('Show Notch', true, KnobsID);
  const toShowArrow = boolean('Show Arrow', false, KnobsID);
  const isCompact = boolean('Is Compact', true, KnobsID);
  const alignment = radios('Dropdown Alignment', alignmentOptions, alignmentOptions.Center, KnobsID);
  const isTitleUppercase = boolean('Is Title uppercase', true, KnobsID);
  const iconValue = select('Select Icon for Header', iconOptions, iconOptions.Filters, KnobsID);

  const DropdownHeader = <Button primary lg>{title.toUpperCase()}</Button>;
  
  return (
    <div className="config-row">
      <div className="overview__filters col-md-8 d-flex align-items-center justify-content-center">
        <Dropdown
          headerElement={toShowCustomHeader && DropdownHeader}
          noArrow={!toShowArrow}
          uppercase={isTitleUppercase}
          isOpen={isOpen}
          title={title}
          align={alignment}
          primary={isPrimary}
          showNotch={toShowNotch}
          icon={iconValue}
          compact={isCompact}
        >
          <div className="feedback-form">
            <span className="feedback-form__text">
              Share your thoughts on our new dashboard
              <span className="feedback-form__required">*</span>
            </span>
            <textarea className="feedback-form__feedback"></textarea>
            <Button danger sm>
              <span>CANCEL</span>
            </Button> &nbsp;
            <Button primary sm>
              <span>SUBMIT</span>
            </Button>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default ConfigDropdown;
