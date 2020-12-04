import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Share = ({ children, ...props }) => {
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
      {children}
    </Box>
  )
}

Share.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Share
