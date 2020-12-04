import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const FooterMenuColumn = ({ children, ...props }) => {
  return (
    <Box __css={{ px: "xsmall", order: ["auto", 3] }} {...props}>
      {children}
    </Box>
  )
}

FooterMenuColumn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

export default FooterMenuColumn
