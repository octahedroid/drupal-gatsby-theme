import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Link from "../Link"

const HeaderBranding = ({ children, to, ariaLabel }) => {
  return (
    <Box
      __css={{
        display: "flex",
        mx: ["auto", 0],
        mt: "0",
        flexWrap: "wrap",
        height: ["auto", null, 80],
        pl: ["small", null, "medium"],
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to={to} ariaLabel={ariaLabel}>
        {children}
      </Link>
    </Box>
  )
}

HeaderBranding.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  to: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
}

export default HeaderBranding
