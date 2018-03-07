import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
Native HTML progress bars
*/
const Slider = ({
  value,
  max,
  min,
  step,
  disabled,
  primary,
  info,
  success,
  warning,
  danger,
  small,
  medium,
  large,
  fullWidth,
  className,
  circle,
  children,
  defaultValue,
  ...props
}) => {
  const classes = classNames('slider', {
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger,
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-fullwidth': fullWidth,
    'is-circle': circle
  }, className)

  return (<input className={classes} defaultValue={defaultValue} value={value} max={max} type='range' {...props} />)
}

Slider.displayName = 'Slider'

Slider.propTypes = {
  className: PropTypes.node,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  fullWidth: PropTypes.bool,
  circle: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  defaultValue: PropTypes.number,
  max: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  min: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  step: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

Slider.defaultProps = {
  defaultValue: 50,
  max: 100,
  min: 0,
  step: 1,
  disabled: false
}

export default Slider
