import React from "react"
import { Box } from "theme-ui"
import PropTypes from "prop-types"
import { Icon } from "ui"

const MobileMenu = ({ children, showSidebar, handleShowSidebar }) => {
  return (
    <Box
      __css={{
        position: "fixed",
        width: "100%",
        zIndex: "35",
        top: 0,
        bg: "darkShade",
        transition: "right 0.5s",
        right: showSidebar ? "0" : "-100%",
        height: "100vh",
      }}
    >
      <Box
        __css={{
          position: "relative",
          display: "flex",
          flexDirection: "flex-end",
          p: "medium",
          width: "100%",
          pb: 0,
        }}
      >
        <Box
          as='button'
          onClick={handleShowSidebar}
          __css={{
            p: 0,
            height: "small",
            border: "none",
            cursor: "pointer",
            bg: "transparent",
          }}
        >
          <Icon
            icon='times'
            sx={{
              fontSize: "4xl",
              color: "lightShade",
            }}
          />
          <Box as='span' __css={{ color: "darkShade" }}>
            Close
          </Box>
        </Box>
      </Box>
      <Box
        __css={{
          color: "white",
          fontSize: "4xl",
          mx: "medium",
          fontWeight: "thin",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

MobileMenu.propTypes = {
  children: PropTypes.node.isRequired,
  showSidebar: PropTypes.bool.isRequired,
  handleShowSidebar: PropTypes.func.isRequired,
}

export default MobileMenu
