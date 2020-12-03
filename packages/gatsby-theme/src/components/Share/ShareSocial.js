import { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  WhatsappShareButton,
} from "react-share"
import Icon from "../Icon"

const Socials = {
  facebook: FacebookShareButton,
  linkedin: LinkedinShareButton,
  twitter: TwitterShareButton,
  reddit: RedditShareButton,
  whatsapp: WhatsappShareButton,
}

const ShareSocial = forwardRef(
  (
    {
      social,
      title,
      to,
      handler,
      hashtags,
      children,
      summary,
      source,
      separator,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        summary={social === "linkedin" && summary}
        source={source === "linkedin" && source}
        separator={social === "whatsapp" && separator}
        via={social === "twitter" && handler}
        hashtags={social === "twitter" && hashtags}
        as={Socials[social]}
        url={to}
        title={title}
        resetButtonStyle={false}
        ref={ref}
        {...props}
      >
        <Icon icon={social} />
        {children}
      </Box>
    )
  }
)

ShareSocial.propTypes = {
  social: PropTypes.string.isRequired,
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  handler: PropTypes.string,
  hashtags: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  source: PropTypes.string,
  separator: PropTypes.string,
}

ShareSocial.defaultProps = {
  children: undefined,
  handler: undefined,
  hashtags: [],
  summary: undefined,
  source: undefined,
  separator: undefined,
}

export default ShareSocial
