import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Button, Icon } from "ui"

const HeaderNavbar = ({ handleShowSidebar, children }) => {
  return (
    <>
      <Box
        __css={{
          flexGrow: "1",
          width: ["full", null, "auto"],
          display: ["none", null, "flex"],
          bg: "white",
          color: "black",
          alignItems: ["flex-start", null, "center"],
          zIndex: 20,
        }}
      >
        <Box
          as='ul'
          __css={{
            display: "flex",
            flex: 1,
            justifyContent: ["center", null, "flex-end"],
            p: 0,
            m: 0,
            li: {
              listStyleType: "none",
              mr: "small",
            },
          }}
        >
          {children}
        </Box>
      </Box>
      <Box
        __css={{
          flexShrink: "1",
          display: ["block", null, "none"],
          mx: ["auto", "none"],
        }}
      >
        <Button
          aria-label='Open mobile menu'
          onClick={handleShowSidebar}
          variant='transparent'
          sx={{ px: "tiny" }}
        >
          <Icon icon='bars' variant='mobileMenu' />
        </Button>
      </Box>
    </>
  )
}

HeaderNavbar.propTypes = {
  children: PropTypes.node.isRequired,
  handleShowSidebar: PropTypes.func.isRequired,
}

export default HeaderNavbar
