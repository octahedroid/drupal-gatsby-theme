import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Grid } from "ui"

const Hero = forwardRef(
  ({ proportion, gutter, children, sx, columns, align, ...props }, ref) => {
    return (
      <Box variant='wrapper' __themeKey='container'>
        <Grid
          ref={ref}
          proportion={proportion}
          columnGap={gutter}
          columns={columns}
          sx={{
            pt: ["medium", null, "xsmall"],
            pb: ["none", null, "small"],
            px: "small",
            textAlign: align,
            ...sx,
          }}
          {...props}
        >
          {children}
        </Grid>
      </Box>
    )
  }
)

Hero.propTypes = {
  proportion: PropTypes.string,
  children: PropTypes.node.isRequired,
  gutter: PropTypes.string,
  sx: PropTypes.shape({}),
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.string,
}

Hero.defaultProps = {
  proportion: undefined,
  gutter: "20px",
  sx: {},
  columns: 1,
  align: "",
}

export default Hero
