import React from "react"
import PropTypes from "prop-types"
import { Contact } from "ui"

const ContactBlock = ({ title, align, contactInfo }) => {
  return (
    <Contact align={align} title={title}>
      <Contact.Grid align={align} contactInfo={contactInfo} />
    </Contact>
  )
}

ContactBlock.propTypes = {
  title: PropTypes.string,
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
  title: undefined,
  align: "center",
}

export default ContactBlock
