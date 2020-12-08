import React, { useState } from "react"
import { Box } from "theme-ui"
import { SkipNavContent } from "@reach/skip-nav"
import { Section, Grid, Card, Link, Icon, MobileMenu } from "ui"
import { FooterBlock, HeaderBlock, HeroBlock } from "blocks"

export default { title: "pages/Blog" }

const branding = {
  to: "/",
  width: 50,
  ariaLabel: "Back to home",
}

const mainMenu = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/",
  },
  {
    name: "JAMSTACK",
    to: "/",
  },
  {
    name: "CMS",
    to: "/",
  },
  {
    name: "WEB DEVELOPMENT",
    to: "/",
  },
  {
    name: "Contact",
    to: "/",
  },
]

const blogTeasers = Array.from(Array(8), (v, i) => {
  return i % 2
    ? {
        title: `Sound Design ${i}`,
        img: {
          src: "https://i.ytimg.com/vi/bUbOc97FpUA/maxresdefault.jpg",
          alt: "Sound Design",
        },
        date: "Julio 2, 2020",
        content: `<strong>Lorem ipsum dolor sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <em>Aenean massa</em>.`,
      }
    : {
        title: `Let's code something now ${i}`,
        img: {
          src: "https://placeimg.com/700/480/tech",
          alt: "tech related stuff",
        },
        date: "Mayo 25, 2019",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa.`,
      }
})

export const BlogListing = () => {
  const [show, handleShow] = useState(false)
  return (
    <Box
      sx={{
        pt: ["large", null, "xlarge"],
      }}
    >
      <HeaderBlock links={mainMenu} />
      <MobileMenu showSidebar={show} handleShowSidebar={() => handleShow(!show)}>
        <MobileMenu.Navbar>
          {mainMenu &&
            mainMenu.map((item) => (
              <MobileMenu.Item key={item.name} to={item.to}>
                {item.name}
              </MobileMenu.Item>
            ))}
        </MobileMenu.Navbar>
      </MobileMenu>
      <Section>
        <SkipNavContent />
        <HeroBlock
          title='Our Ideas'
          text='Creative thinking, technology expertise, and passion for problem solving '
        />
      </Section>
      <Section>
        <Grid columns='3' sx={{ mb: "large" }}>
          {blogTeasers.map((item) => (
            <Card
              key={item.title}
              sx={{
                border: "2px solid grey",
                m: "medium",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link to='/' variant='default'>
                <Card.Image image={item.img} />
              </Link>
              <Card.Heading>{item.title}</Card.Heading>
              <Card.Text sx={{ fontSize: "tiny" }}>
                <Icon icon='calendar' sx={{ pt: 2, mr: "xsmall" }} />
                {item.date}
              </Card.Text>
              <Card.RichText sx={{ flex: "1" }}>{item.content}</Card.RichText>
              <Card.Button to='/' sx={{ alignSelf: "start" }}>
                Read more
              </Card.Button>
            </Card>
          ))}
        </Grid>
      </Section>
      <Section variant='light'>
        <HeroBlock
          align='center'
          text='Build fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers, databases and worry about traffic spikes.'
          title='Ready to embrace the JAMstack revolution?'
          linkTo='/'
          ctaText='Work with us!'
        />
      </Section>
      <Section variant='dark'>
        <FooterBlock branding={branding} align='right' />
      </Section>
    </Box>
  )
}
