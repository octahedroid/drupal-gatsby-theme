import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Share from "../../components/Share"

const ShareBlock = ({ heading, config, disabled, ...props }) => {
  // const generalConfig = { title: config.title, to: config.to }

  return (
    <Box variant='wrapper' __themeKey='container'>
      <Share {...props}>
        {heading && <Share.Heading>{heading}</Share.Heading>}
        <Share.Container>
          {config.map((option) => {
            return !option.disabled && <Share.Social {...option} />
          })}
          {/* {!disabled.facebook && config.facebook && (
            <Share.Social
              social='facebook'
              {...generalConfig}
              {...config.facebook}
            />
          )}
          {!disabled.linkedin && config.linkedin && (
            <Share.Social
              social='linkedin'
              {...generalConfig}
              {...config.linkedin}
            />
          )}
          {!disabled.reddit && config.reddit && (
            <Share.Social social='reddit' {...generalConfig} {...config.reddit} />
          )}
          {!disabled.twitter && config.twitter && (
            <Share.Social social='twitter' {...generalConfig} {...config.twitter} />
          )}
          {!disabled.whatsapp && config.whatsapp && (
            <Share.Social
              social='whatsapp'
              {...generalConfig}
              {...config.whatsapp}
            />
          )} */}
        </Share.Container>
      </Share>
    </Box>
  )
}

const generalProps = { title: PropTypes.string, to: PropTypes.string }

ShareBlock.propTypes = {
  heading: PropTypes.string,
  config: PropTypes.shape({
    map: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    facebook: PropTypes.shape({
      ...generalProps,
    }),
    linkedin: PropTypes.shape({
      ...generalProps,
      summary: PropTypes.string,
      source: PropTypes.string,
    }),
    reddit: PropTypes.shape({
      ...generalProps,
    }),
    twitter: PropTypes.shape({
      ...generalProps,
      handler: PropTypes.string,
      hashtags: PropTypes.arrayOf(PropTypes.string),
    }),
    whatsapp: PropTypes.shape({
      ...generalProps,
      separator: PropTypes.string,
    }),
  }).isRequired,
  disabled: PropTypes.shape({
    facebook: PropTypes.bool,
    linkedin: PropTypes.bool,
    reddit: PropTypes.bool,
    twitter: PropTypes.bool,
    whatsapp: PropTypes.bool,
  }),
}

ShareBlock.defaultProps = {
  heading: "Share: ",
  disabled: {},
}

export default ShareBlock
