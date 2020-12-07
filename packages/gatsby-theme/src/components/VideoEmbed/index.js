import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import ReactPlayer from "react-player/lazy"

const VideoEmbed = ({
  url,
  aspectRatio,
  hideControls,
  lightLoad,
  autoPlay,
  volume,
  loop,
  pip,
  muted,
  sx,
}) => {
  const proportion =
    aspectRatio
      .split(/ |,|:/)
      .reverse()
      .reduce((ac, cu) => (ac ? ac / cu : cu)) * 100
  return (
    <Box __css={{ width: "100%" }} sx={sx}>
      <Box
        __css={{
          pt: `${proportion}%`,
          position: "relative",
          "> div": {
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
      >
        <ReactPlayer
          url={url}
          width='100%'
          height='100%'
          light={lightLoad}
          playing={autoPlay}
          controls={!hideControls}
          volume={volume}
          loop={loop}
          pip={pip}
          muted={muted}
        />
      </Box>
    </Box>
  )
}

VideoEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string,
  hideControls: PropTypes.bool,
  lightLoad: PropTypes.bool,
  autoPlay: PropTypes.bool,
  volume: PropTypes.number,
  loop: PropTypes.bool,
  pip: PropTypes.bool,
  muted: PropTypes.bool,
  sx: PropTypes.shape({}),
}

VideoEmbed.defaultProps = {
  aspectRatio: "16:9",
  hideControls: false,
  lightLoad: false,
  autoPlay: false,
  volume: 0.8,
  loop: false,
  pip: false,
  muted: false,
  sx: null,
}

export default VideoEmbed
