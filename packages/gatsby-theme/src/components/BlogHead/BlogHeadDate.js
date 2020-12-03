import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Icon } from "ui"

const BlogHeadDate = ({ children, ...props }) => {
  return (
    <Box __css={{ pr: "medium" }} {...props}>
      <Icon icon='calendar' sx={{ mr: "xsmall", pt: 2 }} />
      {children}
    </Box>
  )
}

BlogHeadDate.propTypes = {
  children: PropTypes.string.isRequired,
}

export default BlogHeadDate
