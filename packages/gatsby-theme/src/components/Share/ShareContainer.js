import PropTypes from "prop-types"
import { Box } from "theme-ui"

const ShareContainer = ({ children, ...props }) => {
  return (
    <Box
      __css={{
        display: "flex",
        alignItems: "center",
        color: "darkShade",
        button: {
          fontSize: "2xl",
          lineHeight: "0",
          mx: "xsmall",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          ":hover": {
            color: "secondary",
          },
        },
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
