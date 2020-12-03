import PropTypes from "prop-types"
import HeroText from "../../components/HeroText"
import Section from "../../components/Section"

const HeroTextBlock = ({ intro, title, text, ...props }) => {
  return (
    <Section {...props}>
      <HeroText>
        {intro && <HeroText.Intro>{intro}</HeroText.Intro>}
        <HeroText.Title>{title}</HeroText.Title>
        <HeroText.Body>{text}</HeroText.Body>
      </HeroText>
    </Section>
  )
}

HeroTextBlock.propTypes = {
  intro: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

HeroTextBlock.defaultProps = {
  intro: "",
}

export default HeroTextBlock
