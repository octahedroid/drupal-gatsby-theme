import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Share = ({ social, children, ...props }) => {
  return (
    <Box
      __css={{
        py: "small",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
      social={social}
      {...props}
    >
      {children}
    </Box>
  )
}

Share.propTypes = {
  children: PropTypes.node.isRequired,
  social: PropTypes.string.isRequired,
}

export default Share
