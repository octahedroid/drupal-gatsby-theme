import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const FooterLinkGroup = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        p: "xsmall",
        display: "flex",
        justifyContent: ["center", null, "flex-end"],
        order: ["auto", 2, 4],
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

FooterLinkGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

export default FooterLinkGroup
