import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Share } from "ui"

const ShareBlock = ({ data, ...props }) => {
  return (
    <Box variant='wrapper' __themeKey='container'>
      <Share {...props}>
        {data.map((item) => {
          return !item.disabled && <Share.Social {...item} key={item.social} />
        })}
      </Share>
    </Box>
  )
}

ShareBlock.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
}

export default ShareBlock
