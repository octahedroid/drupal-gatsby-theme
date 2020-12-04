import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Share from "../../components/Share"

const ShareBlock = ({ heading, config, ...props }) => {
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

ShareBlock.propTypes = {
  heading: PropTypes.string,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
}

ShareBlock.defaultProps = {
  heading: "Share: ",
}

export default ShareBlock
