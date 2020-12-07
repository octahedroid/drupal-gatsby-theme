import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Header, MobileMenu, Logo } from "ui"

const HeaderBlock = ({ links }) => {
  const [scrolledMenu, setScrolledMenu] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  const handleScroll = (event) => {
    const target = event.target || event.srcElement
    setScrolledMenu(target.scrollingElement.scrollTop > 30)
  }
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }
  }, [])
  return (
    <>
      <Header shadow={scrolledMenu}>
        <Header.Branding to='/' ariaLabel='Back to Home'>
          <Logo />
        </Header.Branding>
        <Header.Navbar handleShowSidebar={handleShowSidebar}>
          {links &&
            links.map((item) => (
              <Header.MenuItem key={item.name} to={item.to} active={item.active}>
                {item.name}
              </Header.MenuItem>
            ))}
        </Header.Navbar>
      </Header>
      <MobileMenu showSidebar={showSidebar} handleShowSidebar={handleShowSidebar}>
        <MobileMenu.Navbar>
          {links &&
            links.map((item) => (
              <MobileMenu.Item key={item.name} to={item.to}>
                {item.name}
              </MobileMenu.Item>
            ))}
        </MobileMenu.Navbar>
      </MobileMenu>
    </>
  )
}

HeaderBlock.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default HeaderBlock
