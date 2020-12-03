import PropTypes from "prop-types"
import { Image } from "ui"

const BlogHeadImage = ({ image, sx }) => {
  return (
    <Image
      image={image}
      sx={{
        img: {
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
          top: 0,
          objectFit: "cover",
          ...sx,
        },
      }}
    />
  )
}

BlogHeadImage.propTypes = {
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
  sx: PropTypes.shape({}),
}

BlogHeadImage.defaultProps = {
  sx: null,
}

export default BlogHeadImage
