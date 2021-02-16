import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Icon, Link } from "ui"

const Heading = forwardRef(
  ({ as, id, anchor, variant, children, align, ...props }, ref) => (
    <Box
      __css={{
        textAlign: align,
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
      id={id}
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
  align: PropTypes.string,
}

Heading.defaultProps = {
  as: "h2",
  variant: "default",
  id: undefined,
  anchor: true,
  align: "left",
}

export default Heading
