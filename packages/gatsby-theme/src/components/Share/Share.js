import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Heading } from "ui"

const Share = ({ children, title, sx, ...props }) => {
  return (
    <Box
      __css={{
        py: "small",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
      {...props}
    >
      <Heading
        sx={{
          color: "secondary",
          m: 0,
          mr: "small",
          ...sx,
        }}
      >
        {title}
      </Heading>
      {children}
    </Box>
  )
}

Share.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  sx: PropTypes.shape({}),
}

Share.defaultProps = {
  title: undefined,
  sx: undefined,
}

export default Share
