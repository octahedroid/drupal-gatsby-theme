import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Text = ({ align, children, ...props }) => {
  return (
    <Box
      __css={{ textAlign: align }}
      variant='wrapper'
      __themeKey='container'
      {...props}
    >
      {children}
    </Box>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
}

Text.defaultProps = {
  align: "left",
}

export default Text
