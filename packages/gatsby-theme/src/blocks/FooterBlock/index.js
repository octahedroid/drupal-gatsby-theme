import PropTypes from "prop-types"
import { Footer } from "ui"

const FooterBlock = ({ isFull, variant, branding }) => {
  return (
    <Footer isFull={isFull} variant={variant}>
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
  variant: PropTypes.string,
  isFull: PropTypes.bool,
  branding: PropTypes.shape({
    to: PropTypes.string,
    ariaLabel: PropTypes.string,
    width: PropTypes.number,
  }),
}

FooterBlock.defaultProps = {
  variant: "dark",
  isFull: false,
  branding: undefined,
}

export default FooterBlock
