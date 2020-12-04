import PropTypes from "prop-types"
import { Footer } from "ui"

const FooterBlock = ({ isFull, variant, branding, children, align }) => {
  return (
    <Footer isFull={isFull} variant={variant} align={align}>
      {children}
      {branding && (
        <Footer.Branding
          to={branding.to}
          ariaLabel={branding.ariaLabel}
          width={branding.width}
          variant={variant}
        />
      )}
    </Footer>
  )
}

FooterBlock.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  isFull: PropTypes.bool,
  branding: PropTypes.shape({
    to: PropTypes.string,
    ariaLabel: PropTypes.string,
    width: PropTypes.number,
  }),
}

FooterBlock.defaultProps = {
  align: "default",
  children: undefined,
  variant: "dark",
  isFull: false,
  branding: undefined,
}

export default FooterBlock
