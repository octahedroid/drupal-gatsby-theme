import React from "react"
import PropTypes from "prop-types"
import HeroCta from "../../components/HeroCta"

const HeroCtaBlock = ({
  columnProportion,
  gutter,
  intro,
  title,
  text,
  image,
  linkTo,
  reversed,
  ctaText,
}) => {
  const elements = [
    <HeroCta.Column key={title}>
      {intro && <HeroCta.Intro>{intro}</HeroCta.Intro>}
      {title && <HeroCta.Heading>{title}</HeroCta.Heading>}
      <HeroCta.Text>{text}</HeroCta.Text>
      {linkTo && ctaText && <HeroCta.Button to={linkTo}>{ctaText}</HeroCta.Button>}
    </HeroCta.Column>,
    <HeroCta.Column key='image'>
      {image && <HeroCta.Image image={image} />}
    </HeroCta.Column>,
  ]

  return (
    <HeroCta gutter={gutter} proportion={columnProportion}>
      {reversed ? elements.reverse() : elements}
    </HeroCta>
  )
}

HeroCtaBlock.propTypes = {
  columnProportion: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
    PropTypes.oneOfType([PropTypes.string]),
  ]),
  intro: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  gutter: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
      fluid: PropTypes.shape({}).isRequired,
      alt: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
      fixed: PropTypes.shape({}).isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ]),
  linkTo: PropTypes.string,
  reversed: PropTypes.bool,
  ctaText: PropTypes.string,
}

HeroCtaBlock.defaultProps = {
  columnProportion: "1:1",
  intro: "",
  title: "",
  image: null,
  linkTo: "",
  reversed: false,
  ctaText: "",
  gutter: "20px",
}

export default HeroCtaBlock
