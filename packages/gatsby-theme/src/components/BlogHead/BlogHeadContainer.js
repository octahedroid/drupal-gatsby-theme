import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Heading, Link, Icon } from "ui"

const BlogHeadContainer = ({ author, ariaLabel, date, title, to, sx, ...props }) => {
  return (
    <Box
      as='section'
      __css={{
        width: "100%",
        py: ["large", null, "xlarge"],
        px: ["medium", "large"],
        zIndex: 4,
        maxWidth: 840,
        mx: "auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        ...sx,
      }}
      {...props}
    >
      <Heading
        as='h1'
        sx={{ fontSize: ["4xl", "5xl"], mb: "small", minWidth: "100%", ...sx }}
      >
        {title}
      </Heading>
      <Box __css={{ pr: "medium" }}>
        {to ? (
          <Link
            to={to}
            ariaLabel={ariaLabel}
            sx={{ color: "inherit", cursor: "pointer" }}
          >
            <Icon icon='user' sx={{ mr: "xsmall", pt: 2 }} />
            {author}
          </Link>
        ) : (
          <>
            <Icon icon='user' sx={{ mr: "xsmall", pt: 2 }} />
            {author}
          </>
        )}
      </Box>
      <Box __css={{ pr: "medium" }}>
        <Icon icon='calendar' sx={{ mr: "xsmall", pt: 2 }} />
        {date}
      </Box>
    </Box>
  )
}

BlogHeadContainer.propTypes = {
  author: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  sx: PropTypes.shape({}),
}

BlogHeadContainer.defaultProps = {
  to: undefined,
  sx: undefined,
}

export default BlogHeadContainer
