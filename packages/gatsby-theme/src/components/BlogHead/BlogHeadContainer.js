import PropTypes from "prop-types"
import { Box } from "theme-ui"

const BlogHeadContainer = ({ children, ...props }) => {
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
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

BlogHeadContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogHeadContainer
