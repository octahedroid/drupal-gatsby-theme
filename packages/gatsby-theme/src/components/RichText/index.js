import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const RichText = React.forwardRef(
  ({ as, text, children, variant, ...props }, ref) => {
    if (text || typeof children === "string") {
      return (
        <Box
          as={as}
          ref={ref}
          __themeKey='text'
          variant={variant}
          {...props}
          dangerouslySetInnerHTML={{ __html: text || children }}
        />
      )
    }

    if (children) {
      return (
        <Box as={as} ref={ref} __themeKey='text' variant={variant} {...props}>
          {children}
        </Box>
      )
    }

    return <></>
  }
)

RichText.propTypes = {
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.string,
  variant: PropTypes.string,
}

RichText.defaultProps = {
  as: "div",
  children: "",
  text: "",
  variant: "default",
}

export default RichText
