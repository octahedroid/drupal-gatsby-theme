import PropTypes from "prop-types"
import { RedditShareButton } from "react-share"
import Icon from "../Icon"

const ShareReddit = ({ title, to, children, ...props }) => {
  return (
    <RedditShareButton url={to} title={title} resetButtonStyle={false} {...props}>
      <Icon icon='reddit' />
      {children}
    </RedditShareButton>
  )
}

ShareReddit.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

ShareReddit.defaultProps = {
  children: "",
}

export default ShareReddit
