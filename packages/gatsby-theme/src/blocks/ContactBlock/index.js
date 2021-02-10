import React from "react"
import PropTypes from "prop-types"
import { Contact } from "ui"

const ContactBlock = ({ heading, align, contactInfo }) => {
  return (
    <Contact align={align}>
      {heading}
      <Contact.Grid align={align} contactInfo={contactInfo} />
    </Contact>
  )
}

ContactBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  contactInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  align: PropTypes.string,
}

ContactBlock.defaultProps = {
  align: "center",
}

export default ContactBlock
