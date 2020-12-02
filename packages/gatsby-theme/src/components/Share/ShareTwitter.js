import PropTypes from "prop-types"
import { TwitterShareButton } from "react-share"
import Icon from "../Icon"

const ShareTwitter = ({ title, to, handler, hashtags, children, ...props }) => {
  return (
    <TwitterShareButton
      url={to}
      title={title}
      via={handler}
      hashtags={hashtags}
      resetButtonStyle={false}
      {...props}
    >
      <Icon icon='twitter' />
      {children}
    </TwitterShareButton>
  )
}

ShareTwitter.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  handler: PropTypes.string,
  hashtags: PropTypes.arrayOf(PropTypes.string),
}

ShareTwitter.defaultProps = {
  children: "",
  handler: "",
  hashtags: [],
}

export default ShareTwitter
