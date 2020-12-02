import PropTypes from "prop-types"
import BlogHead from "../../components/BlogHead"

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
      {credits && <BlogHead.Credits>{credits}</BlogHead.Credits>}
      <BlogHead.Container>
        <BlogHead.Title>{title}</BlogHead.Title>
        <BlogHead.Author
          to={author.link}
          ariaLabel={author.ariaLabel || author.name}
        >
          {author.name}
        </BlogHead.Author>
        <BlogHead.Date>{date}</BlogHead.Date>
      </BlogHead.Container>
    </BlogHead>
  )
}

BlogHeadBlock.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
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
  credits: "",
  image: null,
  backgroundColor: "rgba(21, 30, 46, 0.92)",
}

export default BlogHeadBlock
