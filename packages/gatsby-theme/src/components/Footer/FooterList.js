import PropTypes from "prop-types"
import { Box } from "theme-ui"

const FooterList = ({ children, ...props }) => {
  return (
    <Box
      as='ul'
      __css={{
        mb: "small",
        pl: 0,
        color: "white",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

FooterList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

export default FooterList
