import React from 'react';
import { Button, Dropdown } from '../../../../lib/components';

import './styles.scss';

const CenterAlignedDropdown = () => {
  const DropdownHeader = (<Button primary outline sm>Click Me</Button>)

  return (
    <Dropdown
      headerElement={DropdownHeader}
      noArrow
      showNotch
      isOpen
      onToggleDropdown={() => this.handleBuildDetailMenuToggle('app')}
      notchState="left"
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
  )
}

export default CenterAlignedDropdown;
