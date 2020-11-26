import React from "react"
import PropTypes from "prop-types"
import { Box, useThemeUI } from "theme-ui"

const Button = React.forwardRef(({ to, variant, as, children, ...props }, ref) => {
  const { theme } = useThemeUI()
  return (
    <Box
      ref={ref}
      as={as}
      to={to}
      __themeKey='buttons'
      variant={variant}
      __css={{
        py: "small",
        px: "medium",
        my: 0,
        textAlign: "left",
        width: "auto",
        display: "inline-block",
        fontSize: "xl",
        lineHeight: "none",
        textDecoration: "none",
        cursor: "pointer",
        borderRadius: "100px",
        transition: theme.transitions.bg,
        border: "none",
        "&:hover": {
          boxShadow: "md",
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
})

Button.propTypes = {
  to: PropTypes.string,
  variant: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

Button.defaultProps = {
  to: "",
  variant: "primary",
  as: "button",
}

export default Button
