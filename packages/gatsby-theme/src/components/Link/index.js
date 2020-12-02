import { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import GatsbyLink from "gatsby-link"

const Link = forwardRef(({ to, children, variant, ariaLabel, ...props }, ref) => {
  const internal = /^\/(?!\/)/.test(to)
  const samePage = /^#/.test(to)

  return internal ? (
    <Box
      __themeKey='styles'
      ref={ref}
      aria-label={ariaLabel}
      variant={variant}
      as={GatsbyLink}
      to={to}
      {...props}
    >
      {children}
    </Box>
  ) : (
    <Box
      __themeKey='styles'
      ref={ref}
      aria-label={ariaLabel}
      variant={variant}
      as='a'
      href={to}
      {...(!samePage ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Box>
  )
})

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  variant: PropTypes.string,
}

Link.defaultProps = {
  variant: "a",
  ariaLabel: null,
}

export default Link
