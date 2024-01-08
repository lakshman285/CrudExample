import * as React from 'react';
import PropTypes from 'prop-types';
import {Button as RneUiButton} from '@rneui/themed';

const defaultProps = {
  disabled: false,
  iconPosition: 'left',
  iconRight: false,
  radius: 'xs',
  raised: false,
  size: 'sm',
  type: 'solid',
  uppercase: false,
  style: {},
  pressable: true,
};

const propTypes = {
  TouchableComponent: PropTypes.elementType,
  ViewComponent: PropTypes.element,
  buttonStyle: {
    onPress: PropTypes.func,
    title: PropTypes.string,
    style: PropTypes.object,
    pressable: PropTypes.bool,
  },
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
  ]),
  containerStyle: PropTypes.string,
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.string,
  disabledTextStyle: PropTypes.string,
  icon: PropTypes.node,
  iconContainerStyle: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  loading: PropTypes.bool,
  loadingProps: PropTypes.string,
  loadingStyle: PropTypes.string,
  radius: PropTypes.oneOf(['number', 'sm', 'md', 'lg']),
  raised: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  title: PropTypes.string,
  titleProps: PropTypes.string,
  titleStyle: PropTypes.string,
  type: PropTypes.oneOf(['solid', 'clear', 'outline']),
  uppercase: PropTypes.bool,
};

function Button(props) {
  const {
    TouchableComponent,
    ViewComponent,
    buttonStyle,
    color,
    containerStyle,
    disabled,
    disabledStyle,
    disabledTextStyle,
    icon,
    iconContainerStyle,
    iconPosition,
    iconRight,
    linearGradientProps,
    loading,
    loadingProps,
    loadingStyle,
    radius,
    raised,
    size,
    title,
    titleProps,
    titleStyle,
    type,
    uppercase,
  } = props;
  return (
    <RneUiButton
      TouchableComponent={TouchableComponent}
      ViewComponent={ViewComponent}
      buttonStyle={buttonStyle}
      color={color}
      containerStyle={containerStyle}
      disabled={disabled}
      disabledStyle={disabledStyle}
      disabledTitleStyle={disabledTextStyle}
      icon={icon}
      iconContainerStyle={iconContainerStyle}
      iconPosition={iconPosition}
      iconRight={iconRight}
      linearGradientProps={linearGradientProps}
      loading={loading}
      loadingProps={loadingProps}
      loadingStyle={loadingStyle}
      radius={radius}
      raised={raised}
      size={size}
      title={title}
      titleProps={titleProps}
      titleStyle={titleStyle}
      type={type}
      uppercase={uppercase}
    />
  );
}

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
