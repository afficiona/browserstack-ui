import { theme as defaultTheme } from './../config';
import componentStyles from './../config/component-style';

export const getConfigProperty = (theme, ...propertyPath) => {
  // Function for getting values from themes
  const getterFunction = (...path) => getConfigProperty(theme, ...path);

  // Function for gettings values from objects while 'dereferencing' all
  // functional values
  const receiveValueSafe = (initialValue, ...path) => {
    let value = initialValue;

    for (let i = 0; value !== undefined && i < path.length; i++) {
      let tempValue = value[path[i]];
      while (typeof tempValue === 'function') {
        tempValue = tempValue(getterFunction);
      }

      value = tempValue;
    }

    return value;
  };

  const value = receiveValueSafe(theme, ...propertyPath);

  // Use default theme if property is not found in current theme
  if (value === undefined) {
    return receiveValueSafe(defaultTheme, ...propertyPath,);
  }

  return value;
};

export const getColor = (props, accessor, ...path) => {
  const availableColors = Object.keys(defaultTheme.colorScheme);

  for (let i = 0; i < availableColors.length; i += 1) {
    const color = availableColors[i];
    if (props[color]) {
      return getConfigProperty({...props.theme, ...componentStyles }, accessor, 'colors', color, ...path);
    }
  }

  // Default
  return getConfigProperty({ ...props.theme, ...componentStyles }, accessor, 'colors', 'default', ...path);
};

export const makeGetter = (property) => (
  (props, accessor, ...path) =>
    getConfigProperty({ ...props.theme, ...componentStyles }, accessor, property, ...path)
);

export const getBorderRadius = makeGetter('borderRadius');
export const getFontSize = makeGetter('fontSize');
export const getPadding = makeGetter('padding');
export const getMargin = makeGetter('margin');
export const getBorder = makeGetter('border');
export const getFontFamily = makeGetter('fontFamily');