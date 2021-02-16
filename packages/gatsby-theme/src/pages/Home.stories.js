import React, { useState } from "react"
import { Box } from "theme-ui"
import { Section, Grid, Heading, Card, Link, MobileMenu, SkipContent } from "ui"
import { FooterBlock, HeaderBlock, HeroBlock } from "blocks"

export default { title: "pages/Home" }

const mainMenu = [
  {
    name: "Home",
    to: "/",
    active: true,
  },
  {
    name: "About",
    to: "/",
  },
  {
    name: "Blog",
    to: "/",
  },
  {
    name: "Contact",
    to: "/",
  },
]
export const Home = () => {
  const [show, handleShow] = useState(false)
  return (
    <Box
      __css={{
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
        <SkipContent id='main-content' />
        <HeroBlock
          intro='INTERESTED IN KNOWING MORE ABOUT JAMSTACK?'
          text='Let us help you maximize your project with the latest and modern
          technologies.'
          title='Looking for fast and secure sites and applications?'
          image={{
            src:
              "https://octahedroid.com/static/a06512d94e518dbce8a37f33db1317b3/1ebf8/location.png",
            alt: "Location",
          }}
          linkTo='/'
          ctaText='Work with us!'
        />
      </Section>
      <Section>
        <Grid variant='centered'>
          <Grid.Column columns='12'>
            <Heading align='center'>Our fields of specialty</Heading>
          </Grid.Column>
          <Grid.Column columns='6'>
            <Card align='center'>
              <Link to='/' variant='wrapper'>
                <Card.Image
                  image={{
                    src:
                      "https://octahedroid.com/static/bff5232017ebf10b89bba9d44ccb5d5a/1ebf8/fixing-website.png",
                    alt: "fixing website",
                  }}
                />
              </Link>
              <Card.Heading>Content Management System</Card.Heading>
            </Card>
          </Grid.Column>
          <Grid.Column columns='6'>
            <Card align='center'>
              <Link to='/' variant='wrapper'>
                <Card.Image
                  image={{
                    src:
                      "https://octahedroid.com/static/132b658e112b02a022f136a377f75759/1ebf8/editing-shapes.png",
                    alt: "editing shapes",
                  }}
                />
              </Link>
              <Card.Heading>JAMstack</Card.Heading>
            </Card>
          </Grid.Column>
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
        <FooterBlock
          branding={{
            to: "/",
            width: 100,
            ariaLabel: "Back to home",
          }}
        />
      </Section>
    </Box>
  )
}
