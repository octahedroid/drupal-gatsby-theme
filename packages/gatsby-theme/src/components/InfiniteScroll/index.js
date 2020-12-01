import PropTypes from "prop-types"
import InfiniteScrollLib from "react-infinite-scroll-component"

const InfiniteScroll = ({
  dataLength,
  nextHandler,
  hasMore,
  loadPlaceholder,
  scrollThreshold,
  onScrollHandler,
  endMessage,
  children,
}) => {
  return (
    <InfiniteScrollLib
      dataLength={dataLength}
      next={nextHandler}
      hasMore={hasMore}
      scrollThreshold={scrollThreshold}
      onScroll={onScrollHandler}
      loader={loadPlaceholder}
      endMessage={endMessage}
    >
      {children}
    </InfiniteScrollLib>
  )
}

InfiniteScroll.propTypes = {
  dataLength: PropTypes.number.isRequired,
  nextHandler: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
  loadPlaceholder: PropTypes.node,
  scrollThreshold: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onScrollHandler: PropTypes.func,
  endMessage: PropTypes.node,
  children: PropTypes.node.isRequired,
}

InfiniteScroll.defaultProps = {
  hasMore: false,
  loadPlaceholder: null,
  scrollThreshold: "800px",
  onScrollHandler: () => null,
  endMessage: null,
}

export default InfiniteScroll
