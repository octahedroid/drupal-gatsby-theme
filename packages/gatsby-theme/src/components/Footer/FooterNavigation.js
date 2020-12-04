import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const FooterNavigation = ({ children, align, ...props }) => {
  const alignOptions = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  }

  return (
    <Box
      as='ul'
      __css={{
        display: "flex",
        flexShrink: 1,
        justifyContent: alignOptions[align],
        mx: "auto",
        width: "100%",
        m: 0,
        p: 0,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

FooterNavigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  align: PropTypes.string,
}

FooterNavigation.defaultProps = {
  align: "left",
}

export default FooterNavigation
