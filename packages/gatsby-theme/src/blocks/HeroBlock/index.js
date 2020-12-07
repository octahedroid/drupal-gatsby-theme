import React from "react"
import PropTypes from "prop-types"
import { Hero } from "ui"

const HeroBlock = ({
  columnProportion,
  gutter,
  intro,
  title,
  text,
  image,
  linkTo,
  reversed,
  ctaText,
  align,
}) => {
  const columns = image ? 2 : 1
  const elements = []

  elements.push(
    <Hero.Column key={title}>
      {intro && <Hero.Intro>{intro}</Hero.Intro>}
      {title && <Hero.Title>{title}</Hero.Title>}
      <Hero.Text>{text}</Hero.Text>
      {linkTo && ctaText && <Hero.Cta to={linkTo}>{ctaText}</Hero.Cta>}
    </Hero.Column>
  )

  if (image) {
    elements.push(
      <Hero.Column key='image'>
        <Hero.Image image={image} />
      </Hero.Column>
    )
  }

  return (
    <Hero
      gutter={gutter}
      proportion={columnProportion}
      columns={columns}
      align={align}
    >
      {reversed ? elements.reverse() : elements}
    </Hero>
  )
}

HeroBlock.propTypes = {
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
  align: PropTypes.string,
}

HeroBlock.defaultProps = {
  columnProportion: undefined,
  intro: "",
  title: "",
  image: undefined,
  linkTo: "",
  reversed: false,
  ctaText: "",
  gutter: "20px",
  align: "",
}

export default HeroBlock
