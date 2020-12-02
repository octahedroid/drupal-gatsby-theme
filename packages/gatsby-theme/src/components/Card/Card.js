import { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Link from "../Link"

const Card = forwardRef(({ children, align, to, ...props }, ref) => {
  return (
    <Box
      as={to ? Link : "div"}
      to={to}
      ref={ref}
      __css={{
        p: ["small", null, "medium"],
        textAlign: align,
        color: "inherit",
        ":hover": {
          textDecoration: "none",
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
})

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  to: PropTypes.string,
  align: PropTypes.string,
}

Card.defaultProps = {
  align: "left",
  to: "",
}

export default Card
