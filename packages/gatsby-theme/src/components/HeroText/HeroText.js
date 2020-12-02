import PropTypes from "prop-types"
import { Box } from "theme-ui"

const HeroText = ({ children, ...props }) => (
  <Box
    __css={{
      px: "small",
      pt: ["medium", null, "xsmall"],
      pb: [0, null, "small"],
    }}
    {...props}
  >
    {children}
  </Box>
)

HeroText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroText
