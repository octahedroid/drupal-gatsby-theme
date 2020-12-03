import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Icon, Heading, RichText } from "ui"

const ContactItem = ({ title, text, icon, align, ...props }) => {
  return (
    <Box __css={{ textAlign: align, fontSize: "large" }} {...props}>
      <Heading
        as='h3'
        sx={{
          fontSize: ["large", null, "2xl"],
          m: 0,
          mb: "small",
        }}
      >
        {title}
      </Heading>
      <Box __css={{ mt: "small", mb: ["small", null, "medium"] }}>
        {icon && <Icon sx={{ mr: "xsmall" }} icon={icon} />}
        <RichText
          as='span'
          sx={{
            a: {
              textDecoration: "none",
              color: "link",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          }}
        >
          {text}
        </RichText>
      </Box>
    </Box>
  )
}

ContactItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  align: PropTypes.string,
}

ContactItem.defaultProps = {
  align: "center",
  icon: "",
}

export default ContactItem
