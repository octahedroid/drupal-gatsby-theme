import React from "react"
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

const octahedroid = ({ ...props }) => (
  <Box
    as='svg'
    __css={{ overflow: "visible", width: "140px", pb: "small" }}
    fill='currentColor'
    version='1.1'
    viewBox='0 0 51.75 52'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m25.873-2.75-24.896 14.376v28.749l24.896 14.376 24.901-14.376v-28.749zm0 3.5463 20.292 11.716-8.9103 5.1446-11.381-6.5718-11.377 6.5718-8.9103-5.1446zm0 13.836 8.3076 4.7951-8.3076 4.7999-8.3052-4.7975zm-21.825 0.54243 20.292 11.712v23.431l-20.292-11.716zm43.652 0v23.426l-20.289 11.716v-10.289l11.381-6.5694v-13.141zm-11.982 6.9166v9.5902l-8.3076 4.7999v-9.595z'
      strokeWidth='1.0733'
    />
  </Box>
)

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
  octahedroid,
}

const Icon = React.forwardRef(({ icon, variant, ...props }, ref) => {
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
