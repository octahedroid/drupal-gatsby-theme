import PropTypes from "prop-types"
import Text from "../../components/Text"

const TextBlock = ({ title, text, align, ...props }) => {
  return (
    <Text align={align} {...props}>
      {title && <Text.Title>{title}</Text.Title>}
      {text && <Text.Body>{text}</Text.Body>}
    </Text>
  )
}

TextBlock.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  align: PropTypes.string,
}

TextBlock.defaultProps = {
  title: "",
  text: "",
  align: "left",
}

export default TextBlock
