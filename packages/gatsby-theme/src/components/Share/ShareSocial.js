import React, { forwardRef } from "react"
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
    const Component = Socials[social]
    return (
      <Box
        __css={{
          button: {
            fontSize: "2xl",
            lineHeight: "0",
            mx: "xsmall",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            ":hover": {
              color: "secondary",
            },
          },
        }}
      >
        <Component
          summary={summary}
          source={source}
          separator={separator}
          via={handler}
          hashtags={hashtags}
          url={to}
          title={title}
          resetButtonStyle={false}
          ref={ref}
          {...props}
        >
          <Icon icon={social} />
          {children}
        </Component>
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
