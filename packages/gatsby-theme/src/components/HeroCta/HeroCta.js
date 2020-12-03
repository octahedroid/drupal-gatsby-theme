import { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Grid from "../Grid"

const HeroCta = forwardRef(({ proportion, gutter, children, sx, ...props }, ref) => {
  return (
    <Box variant='wrapper' __themeKey='container'>
      <Grid
        ref={ref}
        proportion={proportion}
        columnGap={gutter}
        sx={{
          pt: ["medium", null, "xsmall"],
          pb: ["none", null, "small"],
          px: "small",
          ...sx,
        }}
        {...props}
      >
        {children}
      </Grid>
    </Box>
  )
})

HeroCta.propTypes = {
  proportion: PropTypes.string,
  children: PropTypes.node.isRequired,
  gutter: PropTypes.string,
  sx: PropTypes.shape({}),
}

HeroCta.defaultProps = {
  proportion: "1:1",
  gutter: "20px",
  sx: null,
}

export default HeroCta
