import PropTypes from "prop-types"
import RichText from "../RichText"

const ContactHeader = ({ children, align, sx, ...props }) => {
  return (
    <RichText sx={{ textAlign: align, pb: "small", ...sx }} {...props}>
      {children}
    </RichText>
  )
}

ContactHeader.propTypes = {
  children: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
  align: PropTypes.string,
}

ContactHeader.defaultProps = {
  align: "center",
  sx: {},
}

export default ContactHeader
