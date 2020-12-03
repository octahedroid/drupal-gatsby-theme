import PropTypes from "prop-types"
import { Image } from "ui"

const HeroCtaImage = ({ image, ...props }) => <Image image={image} {...props} />

HeroCtaImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
      fluid: PropTypes.shape({}).isRequired,
      alt: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
      fixed: PropTypes.shape({}).isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ]).isRequired,
}

export default HeroCtaImage
