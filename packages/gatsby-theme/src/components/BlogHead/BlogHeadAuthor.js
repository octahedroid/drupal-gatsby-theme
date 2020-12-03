import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Link from "../Link"
import Icon from "../Icon"

const BlogHeadAuthor = ({ to, ariaLabel, children, ...props }) => {
  return (
    <Box __css={{ pr: "medium" }} {...props}>
      {to ? (
        <Link
          to={to}
          ariaLabel={ariaLabel}
          sx={{ color: "inherit", cursor: "pointer" }}
        >
          <Icon icon='user' sx={{ mr: "xsmall", pt: 2 }} />
          {children}
        </Link>
      ) : (
        <>
          <Icon icon='user' sx={{ mr: "xsmall", pt: 2 }} />
          {children}
        </>
      )}
    </Box>
  )
}

BlogHeadAuthor.propTypes = {
  to: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

BlogHeadAuthor.defaultProps = {
  to: "",
}

export default BlogHeadAuthor
