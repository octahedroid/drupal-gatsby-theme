import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Heading } from "ui"

const Share = ({ children, heading, sx, ...props }) => {
  return (
    <Box
      __css={{
        py: "small",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        ...sx,
      }}
      {...props}
    >
      {heading && (
        <Heading
          sx={{
            color: "secondary",
            m: 0,
            mr: "small",
          }}
        >
          {heading}
        </Heading>
      )}
      <Box
        __css={{
          display: "flex",
          alignItems: "center",
          color: "darkShade",
        }}
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
}

Share.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  sx: PropTypes.shape({}),
}

Share.defaultProps = {
  heading: undefined,
  sx: undefined,
}

export default Share
