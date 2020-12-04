import React from "react"
import PropTypes from "prop-types"
import Footer from "../../components/Footer"

const FooterBlock = ({ isFull, variant, branding, menuColumns, socialLinks }) => {
  return (
    <Footer isFull={isFull} variant={variant}>
      <Footer.Branding
        to={branding.to}
        ariaLabel={branding.ariaLabel}
        width={branding.width}
        variant={variant}
      />
      {menuColumns &&
        menuColumns.map((menuColumn) => {
          return (
            <Footer.MenuColumn key={menuColumn.title}>
              <Footer.MenuTitle>{menuColumn.title}</Footer.MenuTitle>
              <Footer.List>
                {menuColumn.links &&
                  menuColumn.links.map((item) => (
                    <Footer.MenuItem
                      to={item.to}
                      key={item.name}
                      ariaLabel={item.ariaLabel}
                    >
                      {item.name}
                    </Footer.MenuItem>
                  ))}
              </Footer.List>
            </Footer.MenuColumn>
          )
        })}
      {socialLinks && (
        <Footer.LinkGroup>
          {socialLinks.map((socialLink) => (
            <Footer.Link
              to={socialLink.to}
              variant={variant}
              ariaLabel={socialLink.ariaLabel}
            >
              <Footer.Icon icon={socialLink.icon} variant='social' />
            </Footer.Link>
          ))}
        </Footer.LinkGroup>
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
  }).isRequired,
  menuColumns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          to: PropTypes.string,
          name: PropTypes.string,
          ariaLabel: PropTypes.string,
        })
      ),
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      ariaLabel: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
}

FooterBlock.defaultProps = {
  variant: "dark",
  isFull: false,
  menuColumns: undefined,
  socialLinks: undefined,
}

export default FooterBlock
