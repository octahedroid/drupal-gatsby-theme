import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const calculateProportion = (proportion) =>
  proportion
    .split(/ |:|, /g)
    .map((el) => `${el}fr`)
    .join(" ")

const Grid = ({
  columns,
  proportion,
  columnGap,
  rowGap,
  children,
  align,
  ...props
}) => {
  const calculatedColumns = Array.isArray(columns)
    ? columns.map((el) => (el ? `repeat(${el}, 1fr)` : null))
    : ["1fr", `1fr 1fr`, `repeat(${columns}, 1fr)`]

  let calculatedProportion = null

  if (proportion) {
    calculatedProportion = Array.isArray(proportion)
      ? proportion.map((el) => (el ? calculateProportion(el) : null))
      : ["1fr", null, calculateProportion(proportion)]
  }

  const template = calculatedProportion || calculatedColumns

  return (
    <Box
      __css={{
        display: "grid",
        gridTemplateColumns: template,
        rowGap,
        columnGap,
        textAlign: align || "inherit",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

Grid.propTypes = {
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ]),
  proportion: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
    PropTypes.oneOfType([PropTypes.string]),
  ]),
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
}

Grid.defaultProps = {
  columns: "12",
  proportion: undefined,
  columnGap: undefined,
  rowGap: undefined,
  align: undefined,
}

export default Grid
