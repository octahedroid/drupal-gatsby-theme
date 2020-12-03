import PropTypes from "prop-types"
import { Box } from "theme-ui"

const BlogHeadCredits = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        position: "absolute",
        zIndex: 4,
        bottom: "small",
        left: "medium",
        fontWeight: "thin",
        fontSize: "tiny",
        fontStyle: "italic",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

BlogHeadCredits.propTypes = {
  children: PropTypes.string.isRequired,
}

export default BlogHeadCredits
