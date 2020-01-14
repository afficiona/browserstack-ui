import React, { PureComponent, createRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Notch from './partials/notch';
import DefaultHeader from './partials/default-header';

import StyledDropdown, { StyledHead, StyledContent } from './styles';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: this.props.isOpen
    };
  }

  dropdownRef = createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = ({ target }) => {
    const { isDropdownOpen } = this.state;

    if (this.dropdownRef.current && !this.dropdownRef.current.contains(target) && isDropdownOpen) {
      this.toggleDropdown();
    }
  };

  toggleDropdown = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  handleKeyUp = (event) => {
    if (event.which === 13) {
      this.toggleDropdown();
    }
  };

  render() {
    const { icon, title, uppercase, children, modifiers, showNotch, headerElement, isOpen, notchState, classname } = this.props;

    const modifierClasses = modifiers.map((modifier) => `dropdown--${modifier}`).join(' ');

    return (
      <StyledDropdown
        className={classNames(`dropdown ${modifierClasses}`, classname, {
          'is-open': isOpen
        })}
        compact
        isOpen={this.state.isDropdownOpen}
        isLeftAligned
        ref={this.dropdownRef}
      >
        <StyledHead
          onClick={this.toggleDropdown}
          onKeyUp={this.handleKeyUp}
          role="button"
          tabIndex="0"
        >
          {
            headerElement ||
            <DefaultHeader
              icon={icon}
              uppercase={uppercase}
              title={title}
            />
          }
        </StyledHead>
        {this.state.isDropdownOpen && (
          <StyledContent className="dropdown__content">
            {showNotch && <Notch state={notchState} />}
            {children}
          </StyledContent>
        )}
      </StyledDropdown>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  headerElement: PropTypes.node,
  icon: PropTypes.string,
  isOpen: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  onToggleDropdown: PropTypes.func.isRequired,
  showNotch: PropTypes.bool,
  text: PropTypes.string,
  notchState: PropTypes.string,
  classname: PropTypes.string
};

Dropdown.defaultProps = {
  headerElement: null,
  icon: '',
  isOpen: false,
  modifiers: [],
  showNotch: false,
  text: '',
  notchState: 'up',
  classname: ''
};

export default Dropdown;
