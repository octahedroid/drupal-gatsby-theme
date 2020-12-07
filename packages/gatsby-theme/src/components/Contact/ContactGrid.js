import React from "react"
import PropTypes from "prop-types"
import { Grid } from "ui"
import ContactItem from "./ContactItem"

const ContactGrid = ({ align, contactInfo, ...props }) => {
  const columns = contactInfo.length
  return (
    <Grid columns={[1, 1, columns]} {...props}>
      {contactInfo.map(({ title, text, icon }) => (
        <ContactItem
          align={align}
          title={title}
          text={text}
          icon={icon}
          key={title}
        />
      ))}
    </Grid>
  )
}

ContactGrid.propTypes = {
  contactInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  align: PropTypes.string,
}

ContactGrid.defaultProps = {
  align: "center",
}

export default ContactGrid
