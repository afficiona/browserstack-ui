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
      isDropdownOpen: props.isOpen
    };
  }

  dropdownRef = createRef();

  componentWillReceiveProps(nextProps) {
    if (this.props.isOpen !== nextProps.isOpen) {
      this.setState({ isDropdownOpen: nextProps.isOpen });
    }
  }

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
    const { icon, align, compact, primary, fillParent, title, uppercase, noArrow, children, modifiers, showNotch, headerElement } = this.props;
    
    return (
      <StyledDropdown
        compact={compact}
        noArrow={noArrow}
        isOpen={this.state.isDropdownOpen}
        align={align}
        ref={this.dropdownRef}
        fillParent={fillParent}
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
              compact={compact}
              primary={primary}
              isOpen={this.state.isDropdownOpen}
              icon={icon}
              uppercase={uppercase}
              title={title}
            />
          }
        </StyledHead>
        {this.state.isDropdownOpen && (
          <StyledContent>
            {showNotch && <Notch align={align} />}
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
