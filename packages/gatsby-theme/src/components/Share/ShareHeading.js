import PropTypes from "prop-types"
import Heading from "../Heading"

const ShareHeading = ({ sx, children }) => {
  return (
    <Heading
      sx={{
        color: "secondary",
        m: 0,
        mr: "small",
        ...sx,
      }}
    >
      {children}
    </Heading>
  )
}

ShareHeading.propTypes = {
  children: PropTypes.string,
  sx: PropTypes.shape({}),
}

ShareHeading.defaultProps = {
  sx: null,
  children: "Share: ",
}

export default ShareHeading
