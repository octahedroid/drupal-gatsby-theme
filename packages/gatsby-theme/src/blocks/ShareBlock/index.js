import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Share from "../../components/Share"

const ShareBlock = ({ heading, config, disabled, ...props }) => {
  return (
    <Box variant='wrapper' __themeKey='container'>
      <Share {...props}>
        {heading && <Share.Heading>{heading}</Share.Heading>}
        <Share.Container>
          {config.map((option) => {
            return !option.disabled && <Share.Social {...option} />
          })}
        </Share.Container>
      </Share>
    </Box>
  )
}

// const generalProps = { title: PropTypes.string, to: PropTypes.string }

ShareBlock.propTypes = {
  heading: PropTypes.string,
  config: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
