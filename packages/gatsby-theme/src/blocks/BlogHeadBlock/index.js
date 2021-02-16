import React from "react"
import PropTypes from "prop-types"
import { BlogHead } from "ui"

const BlogHeadBlock = ({
  title,
  author,
  image,
  credits,
  date,
  backgroundColor,
  ...props
}) => {
  return (
    <BlogHead imageOverlay={backgroundColor} {...props}>
      {image && <BlogHead.Image image={image} />}
      <BlogHead.Container
        credits={credits}
        author={author}
        date={date}
        title={title}
        to={author.link}
      />
    </BlogHead>
  )
}

BlogHeadBlock.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    authorLabel: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  credits: PropTypes.string,
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
  ]),
  date: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
}

BlogHeadBlock.defaultProps = {
  credits: undefined,
  image: undefined,
  backgroundColor: "darkBlueOpaque",
}

export default BlogHeadBlock
