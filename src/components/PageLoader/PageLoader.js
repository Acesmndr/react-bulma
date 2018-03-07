import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
A simple container to center your content horizontally
*/
const PageLoader = ({
  className,
  ...props
}) => {
  const classes = classNames('pageloader', className);

  return <div className={classes} {...props} />
}

PageLoader.displayName = 'PageLoader'

PageLoader.propTypes = {
  className: PropTypes.string
}

export default PageLoader
