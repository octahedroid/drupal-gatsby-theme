import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box, useThemeUI } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import RichText from "../RichText"

const Image = forwardRef(({ variant, caption, image, ...props }, ref) => {
  const { theme } = useThemeUI()
  const isGatsbyImage = !image.src
  return (
    <Box as='figure' __css={{ m: 0 }} {...props}>
      {isGatsbyImage ? (
        <GatsbyImage
          ref={ref}
          {...image}
          style={theme.images[variant] ?? theme.images.default}
          variant={variant}
        />
      ) : (
        <Box
          ref={ref}
          variant={variant}
          as='img'
          __themeKey='images'
          src={image.src}
          alt={image.alt}
        />
      )}
      {caption && (
        <RichText as='figcaption' sx={{ fontSize: "tiny", fontStyle: "italic" }}>
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
  caption: undefined,
  variant: "default",
}
export default Image
