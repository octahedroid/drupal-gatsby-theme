import { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Section } from "ui"

const Footer = forwardRef(
  ({ children, size, align, isFull, variant, ...props }, ref) => {
    const alignOptions = {
      default: ["row", null, "row-reverse"],
      left: "row-reverse",
      right: "row",
    }

    return (
      <Section isFull={isFull} variant={variant} ref={ref} {...props}>
        <Box
          __css={{
            display: "flex",
            flexDirection: ["column", null, alignOptions[align]],
            flexWrap: ["wrap", null, "nowrap"],
            justifyContent: "space-between",
            px: "xsmall",
            py: 22,
          }}
        >
          {children}
        </Box>
      </Section>
    )
  }
)

Footer.propTypes = {
  isFull: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  align: PropTypes.string,
  size: PropTypes.string,
}

Footer.defaultProps = {
  isFull: false,
  variant: "dark",
  align: "default",
  size: "default",
}

export default Footer
