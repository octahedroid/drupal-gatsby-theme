import PropTypes from "prop-types"
import { FacebookShareButton } from "react-share"
import Icon from "../Icon"

const ShareFacebook = ({ title, to, children, ...props }) => {
  return (
    <FacebookShareButton url={to} title={title} {...props} resetButtonStyle={false}>
      <Icon icon='facebook' />
      {children}
    </FacebookShareButton>
  )
}

ShareFacebook.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

ShareFacebook.defaultProps = {
  children: "",
}

export default ShareFacebook
