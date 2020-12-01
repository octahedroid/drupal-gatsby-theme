import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Icon from "../Icon"
import Link from "../Link"

const Heading = React.forwardRef(
  ({ as, id, anchor, variant, children, ...props }, ref) => (
    <Box
      __css={{
        svg: {
          ml: "xsmall",
          fontSize: "2xl",
          color: "darkShade",
          visibility: "hidden",
          ":hover": {
            color: "secondary",
          },
        },
        ":hover": {
          svg: {
            visibility: "visible",
          },
        },
      }}
      ref={ref}
      __themeKey='headings'
      variant={variant}
      id={id || undefined}
      as={as}
      {...props}
    >
      {children}
      {id && anchor && (
        <Link to={`#${id}`} aria-hidden>
          <Icon icon='link' />
        </Link>
      )}
    </Box>
  )
)

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  variant: PropTypes.string,
  id: PropTypes.string,
  anchor: PropTypes.bool,
}

Heading.defaultProps = {
  as: "h2",
  variant: "default",
  id: "",
  anchor: true,
}

export default Heading
