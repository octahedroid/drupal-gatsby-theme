import React from "react"
import PropTypes from "prop-types"
import { Image } from "ui"

const HeroImage = ({ image, ...props }) => <Image image={image} {...props} />

HeroImage.propTypes = {
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

export default HeroImage
