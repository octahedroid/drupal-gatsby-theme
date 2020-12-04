import { useState } from "react"
import { Box } from "theme-ui"
import { SkipNavContent } from "@reach/skip-nav"

import { Header, Section, Grid, Heading, Card, Link, Logo, MobileMenu } from "ui"

import { FooterBlock } from "blocks"
import HeroCta from "../components/HeroCta"

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

export const Home = () => {
  const [show, handleShow] = useState(false)
  return (
    <Box
      sx={{
        pt: ["large", null, "xlarge"],
      }}
    >
      <Header shadow>
        <Header.Branding to='/' ariaLabel='Back to Home'>
          <Logo />
        </Header.Branding>
        <Header.Navbar handleShowSidebar={() => handleShow(!show)}>
          {mainMenu &&
            mainMenu.map((item) => (
              <Header.MenuItem key={item.name} to={item.to} active={item.active}>
                {item.name}
              </Header.MenuItem>
            ))}
        </Header.Navbar>
      </Header>
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
        <HeroCta>
          <HeroCta.Column>
            <HeroCta.Intro>INTERESTED IN KNOWING MORE ABOUT JAMSTACK?</HeroCta.Intro>
            <HeroCta.Heading>
              Looking for fast and secure sites and applications?
            </HeroCta.Heading>
            <HeroCta.Text>
              Let us help you maximize your project with the latest and modern
              technologies.
            </HeroCta.Text>
            <HeroCta.Button to='/'>Work with us!</HeroCta.Button>
          </HeroCta.Column>
          <HeroCta.Column>
            <HeroCta.Image
              image={{
                src:
                  "https://octahedroid.com/static/a06512d94e518dbce8a37f33db1317b3/1ebf8/location.png",
                alt: "Location",
              }}
            />
          </HeroCta.Column>
        </HeroCta>
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
