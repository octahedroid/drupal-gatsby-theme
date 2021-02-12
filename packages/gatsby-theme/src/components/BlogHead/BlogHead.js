import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Image } from "ui"

const BlogHead = ({ image, imageOverlay, children, sx, ...props }) => {
  return (
    <Box
      __css={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        minHeight: "50vh",
        color: "white",
        ":before": {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          bg: imageOverlay || "rgba(21, 30, 46, 0.8)",
          minWidth: "100%",
          minHeight: "100%",
          flexShrink: 0,
          content: '""',
        },
      }}
      {...props}
    >
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
      {children}
    </Box>
  )
}

BlogHead.propTypes = {
  children: PropTypes.node.isRequired,
  imageOverlay: PropTypes.string,
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

BlogHead.defaultProps = {
  imageOverlay: undefined,
  sx: undefined,
}

export default BlogHead
