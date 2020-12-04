import React from "react"
import PropTypes from "prop-types"
import Heading from "../Heading"

const BlogHeadTitle = ({ children, sx }) => {
  return (
    <Heading
      as='h1'
      sx={{ fontSize: ["4xl", "5xl"], mb: "small", minWidth: "100%", ...sx }}
    >
      {children}
    </Heading>
  )
}

BlogHeadTitle.propTypes = {
  children: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
}

BlogHeadTitle.defaultProps = {
  sx: null,
}

export default BlogHeadTitle
