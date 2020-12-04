import PropTypes from "prop-types"
import { Box } from "theme-ui"

const ShareContainer = ({ children, ...props }) => {
  return (
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
  )
}

ShareContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ShareContainer
