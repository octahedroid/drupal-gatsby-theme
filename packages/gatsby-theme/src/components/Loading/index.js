import React from "react"
import { Box, Divider } from "theme-ui"
import PropTypes from "prop-types"
import ContentLoader from "react-content-loader"

const Loading = ({ type }) => {
  const loadingTypes = {
    contact: (
      <Box __themeKey='container' variant='wrapper' sx={{ height: "149px" }}>
        <Box as={ContentLoader} width='100%' __css={{ display: "block" }}>
          <rect x='20%' rx='3' ry='3' width='60%' height='16' />
          <rect x='2.5%' y='36' rx='3' ry='3' width='25%' height='97' />
          <rect x='37.5%' y='36' rx='3' ry='3' width='25%' height='97' />
          <rect x='72.5%' y='36' rx='3' ry='3' width='25%' height='97' />
        </Box>
      </Box>
    ),
    blog_list: (
      <Box __themeKey='container' variant='wrapper' sx={{ height: "700px" }}>
        <Divider />
        <Box
          as={ContentLoader}
          width='100%'
          height='100%'
          __css={{ display: "block" }}
        >
          <rect
            x='5%'
            rx='3'
            ry='3'
            sx={{
              y: ["40", "60"],
              width: ["90%", "40%"],
              height: [200, 230, 340],
            }}
          />
          <rect
            x='5%'
            rx='3'
            ry='3'
            sx={{ y: ["260", "310", "420"], width: ["40%", "15%"], height: 20 }}
          />
          <rect
            x='5%'
            rx='3'
            ry='3'
            sx={{ y: ["290", "340", "450"], width: ["90%", "40%"], height: 20 }}
          />
          <rect
            x='5%'
            rx='3'
            ry='3'
            sx={{
              y: ["315", "365", "475"],
              width: ["90%", "40%", "20%"],
              height: 20,
            }}
          />
          <rect
            x='5%'
            rx='3'
            ry='3'
            sx={{
              y: ["340", "390"],
              width: ["50%", "20%", "0%"],
              height: 20,
            }}
          />
          <rect
            x='5%'
            rx='3'
            ry='3'
            sx={{
              y: ["380", "430", "515"],
              width: ["30%", "15%", "12%"],
              height: 25,
            }}
          />

          <rect
            x='55%'
            rx='3'
            ry='3'
            sx={{ y: "60", width: ["0%", "40%"], height: [230, null, 340] }}
          />
          <rect
            x='55%'
            rx='3'
            ry='3'
            sx={{ y: ["310", null, "420"], width: ["0%", "15%"], height: 20 }}
          />
          <rect
            x='55%'
            rx='3'
            ry='3'
            sx={{ y: ["340", null, "450"], width: ["0%", "40%"], height: 20 }}
          />
          <rect
            x='55%'
            rx='3'
            ry='3'
            sx={{
              y: ["365", null, "475"],
              width: ["0%", "40%", "20%"],
              height: 20,
            }}
          />
          <rect
            x='55%'
            rx='3'
            ry='3'
            sx={{
              y: ["390"],
              width: ["0%", "20%", "0%"],
              height: 20,
            }}
          />
          <rect
            x='55%'
            rx='3'
            ry='3'
            sx={{
              y: ["430", null, "515"],
              width: ["0%", "15%", "12%"],
              height: 25,
            }}
          />
        </Box>
      </Box>
    ),
  }
  return loadingTypes[type]
}

Loading.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Loading
