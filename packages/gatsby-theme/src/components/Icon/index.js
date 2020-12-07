import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaUser,
  FaCalendar,
  FaFacebook,
  FaWhatsapp,
  FaReddit,
  FaComment,
  FaPhone,
  FaLink,
} from "react-icons/fa"

const Icons = {
  facebook: FaFacebook,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  github: FaGithub,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  bars: FaBars,
  times: FaTimes,
  user: FaUser,
  calendar: FaCalendar,
  comment: FaComment,
  phone: FaPhone,
  link: FaLink,
}

const Icon = forwardRef(({ icon, variant, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      as={Icons[icon]}
      variant={variant}
      __themeKey='icons'
      {...props}
    />
  )
})

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

Icon.defaultProps = {
  variant: "default",
}

export default Icon
