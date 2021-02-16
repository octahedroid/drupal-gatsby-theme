import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const RichText = forwardRef(({ as, text, children, ...props }, ref) => {
  if (text || typeof children === "string") {
    return (
      <Box
        as={as}
        ref={ref}
        {...props}
        dangerouslySetInnerHTML={{ __html: text || children }}
      />
    )
  }

  if (children) {
    return (
      <Box as={as} ref={ref} {...props}>
        {children}
      </Box>
    )
  }

  return <></>
})

RichText.propTypes = {
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.node,
  text: PropTypes.string,
}

RichText.defaultProps = {
  as: "div",
  children: undefined,
  text: undefined,
}

export default RichText
