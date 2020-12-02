import PropTypes from "prop-types"
import { WhatsappShareButton } from "react-share"
import Icon from "../Icon"

const ShareWhatsapp = ({ title, to, separator, children, ...props }) => {
  return (
    <WhatsappShareButton
      url={to}
      title={title}
      separator={separator}
      resetButtonStyle={false}
      {...props}
    >
      <Icon icon='whatsapp' />
      {children}
    </WhatsappShareButton>
  )
}

ShareWhatsapp.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  separator: PropTypes.string,
}

ShareWhatsapp.defaultProps = {
  children: "",
  separator: " ",
}

export default ShareWhatsapp
