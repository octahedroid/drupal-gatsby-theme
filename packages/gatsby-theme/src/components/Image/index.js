import React from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { Box, jsx } from 'theme-ui'
import Img from 'gatsby-image'
import RichText from '../RichText'

const Image = React.forwardRef(({ variant, caption, image, ...props }, ref) => {
  const isGatsbyImage = !image.src
  return (
    <Box as="figure" __css={{ m: 0 }} {...props}>
      {isGatsbyImage ? (
        <Img ref={ref} variant={variant} __themeKey="images" {...image} />
      ) : (
        <Box
          ref={ref}
          variant={variant}
          as="img"
          __themeKey="images"
          src={image.src}
          alt={image.alt}
        />
      )}
      {caption && (
        <RichText
          as="figcaption"
          sx={{ fontSize: 'tiny', fontStyle: 'italic' }}
        >
          {caption}
        </RichText>
      )}
    </Box>
  )
})
Image.propTypes = {
  variant: PropTypes.string,
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
  caption: PropTypes.string,
}
Image.defaultProps = {
  caption: '',
  variant: 'default',
}
export default Image
