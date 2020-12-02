import PropTypes from "prop-types"
import { LinkedinShareButton } from "react-share"
import Icon from "../Icon"

const ShareLinkedin = ({ title, to, summary, source, children, ...props }) => {
  return (
    <LinkedinShareButton
      url={to}
      title={title}
      summary={summary}
      source={source}
      resetButtonStyle={false}
      {...props}
    >
      <Icon icon='linkedin' />
      {children}
    </LinkedinShareButton>
  )
}

ShareLinkedin.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  summary: PropTypes.string,
  source: PropTypes.string,
}

ShareLinkedin.defaultProps = {
  children: "",
  summary: "",
  source: "",
}

export default ShareLinkedin
