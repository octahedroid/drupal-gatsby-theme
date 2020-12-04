import { useState } from "react"
import { Box } from "theme-ui"
import { SkipNavContent } from "@reach/skip-nav"
import {
  Contact,
  Header,
  Section,
  Image,
  BlogHead,
  Text,
  Link,
  Logo,
  Footer,
  MobileMenu,
  Heading,
} from "ui"

export default { title: "pages/Blog" }

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
const contactInfo = [
  {
    title: "Email",
    icon: "comment",
    text: "hq@octahedroid.com",
  },
  {
    title: "Schedule",
    icon: "calendar",
    text: `<a
              href="https://calendly.com/jmolivas/free-one-to-one-consultation"
              target="_blank"
              rel="noreferrer"
              style="color: inherit;"
            >
              Free consultation
            </a>`,
  },
  {
    title: "Phone",
    icon: "phone",
    text: "760-618-1215",
  },
]

export const BlogPost = () => {
  const [show, handleShow] = useState(false)
  return (
    <Box
      sx={{
        pt: "large",
      }}
    >
      <Header shadow>
        <Header.Branding to='/' ariaLabel='Back to Home'>
          <Logo />
        </Header.Branding>
        <Header.Navbar handleShowSidebar={() => handleShow(!show)}>
          {mainMenu &&
            mainMenu.map((item) => (
              <Header.MenuItem
                key={item.name}
                to={item.to}
                variant={item.active ? "menuItemLinkActive" : "menuItemLink"}
              >
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
      <BlogHead>
        <BlogHead.Image
          image={{
            src: "https://i.ytimg.com/vi/Buz0mzWozpU/maxresdefault.jpg",
            alt: "Light Bulbs",
          }}
        />
        <BlogHead.Credits>Via Unsplash</BlogHead.Credits>
        <BlogHead.Container>
          <SkipNavContent />
          <BlogHead.Title>
            Gatsby&apos;s long road to incremental builds with Kyle Mathews
          </BlogHead.Title>
          <BlogHead.Author to='/' ariaLabel='Marco'>
            Marco José Sánchez
          </BlogHead.Author>
          <BlogHead.Date>Julio 2, 2020</BlogHead.Date>
        </BlogHead.Container>
      </BlogHead>
      <Section
        sx={{
          p: ["medium", "large"],
          maxWidth: [null, null, 1024],
          fontSize: "1.1em",
        }}
      >
        <Heading>Incremental builds</Heading>
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus
            vestibulum sed arcu. Nisi porta lorem mollis aliquam ut porttitor leo.
            Viverra adipiscing at in tellus integer feugiat scelerisque. Id eu nisl
            nunc mi ipsum faucibus vitae aliquet. Est placerat in egestas erat
            imperdiet sed euismod nisi porta. Mattis nunc sed blandit libero volutpat
            sed. Dictum sit amet justo donec. Commodo nulla facilisi nullam vehicula
            ipsum a arcu. Eu turpis egestas pretium aenean. Netus et malesuada fames
            ac turpis egestas integer eget. Faucibus interdum posuere lorem ipsum
            dolor sit amet consectetur adipiscing. Ornare lectus sit amet est
            placerat in egestas erat imperdiet.
          </p>
        </Text>
        <Image
          sx={{ p: "medium", pb: "small" }}
          image={{
            src:
              "https://www.guillermotobar.com/static/gatsbyjs-992e4beb0be3860058645652fb635ac5-48538.png",
            alt: "Gatsby",
          }}
          caption='A nice caption'
        />
        <Text>
          <p>Ullamcorper a lacus vestibulum sed arcu:</p>
          <ul>
            <li>Commodo</li>
            <li>Ornare</li>
            <li>Mattis</li>
          </ul>
        </Text>
        <Text>
          <Heading>Building It</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus
            vestibulum sed arcu. Nisi porta lorem mollis aliquam ut porttitor leo.
            Viverra adipiscing at in tellus integer feugiat scelerisque.
          </p>
          <p>
            Id eu nisl nunc mi ipsum faucibus vitae aliquet. Est placerat in egestas
            erat imperdiet sed euismod nisi porta. Mattis nunc sed blandit libero
            volutpat sed. Dictum sit amet justo donec. Commodo nulla facilisi nullam
            vehicula ipsum a arcu. Eu turpis egestas pretium aenean. Netus et
            malesuada fames ac turpis egestas integer eget. Faucibus interdum posuere
            lorem ipsum dolor sit amet consectetur adipiscing. Ornare lectus sit amet
            est placerat in egestas erat imperdiet.
          </p>
        </Text>
        <Text>
          <p>
            Id eu nisl nunc mi ipsum faucibus vitae aliquet. Est placerat in egestas
            erat imperdiet sed euismod nisi porta. Mattis nunc sed blandit libero
            volutpat sed. Dictum sit amet justo donec. Commodo nulla facilisi nullam
            vehicula ipsum a arcu. Eu turpis egestas pretium aenean. Netus et
            malesuada fames ac turpis egestas integer eget. Faucibus interdum posuere
            lorem ipsum dolor sit amet consectetur adipiscing. Ornare lectus sit amet
            est placerat in egestas erat imperdiet.
          </p>
          <p>
            Sed congue ultricies odio,
            <strong>
              lacinia vulputate dolor blandit ut. Etiam et mollis velit
            </strong>
            .Pellentesque egestas dignissim velit, ac bibendum ante pulvinar sed. Sed
            quis tortor suscipit, convallis ex quis, efficitur magna. Vestibulum
            porta dapibus posuere. Phasellus euismod tristique felis in sollicitudin.
            Mauris fringilla cursus ultricies.
            <Link to='/'>Proin nunc felisfringilla cursus ultricies</Link>
            semper eget porta eu, bibendumeget risus. Suspendisse sit amet libero
            tortor. Sed at diam sit amet turpis porta lacinia sit amet convallis
            nulla. Pellentesque vel lobortis neque. Ut finibus aliquam posuere.
            Vivamus mattis porta nulla vel condimentum. Vestibulum ornare tempus
            tortor. Donec rutrum luctus consectetur. Praesent ut dapibus elit.
          </p>
          <ol>
            <li>Lorem</li>
            <li>Ipsum</li>
          </ol>
          <p>
            Id eu nisl nunc mi ipsum faucibus vitae aliquet. Est placerat in egestas
            erat imperdiet sed euismod nisi porta. Mattis nunc sed blandit libero
            volutpat sed. Dictum sit amet justo donec. Commodo nulla facilisi nullam
            vehicula ipsum a arcu. Eu turpis egestas pretium aenean. Netus et
            malesuada fames ac turpis egestas integer eget. Faucibus interdum posuere
            lorem ipsum dolor sit amet consectetur adipiscing. Ornare lectus sit amet
            est placerat in egestas erat imperdiet.
          </p>
        </Text>
      </Section>
      <Section variant='dark'>
        <Footer>
          <Footer.Branding to='/' ariaLabel='Back to Home'>
            <Logo width={200} fill='#fff' />
          </Footer.Branding>
          <Contact>
            <Contact.Header>
              Tell us about your project. And we will contact you promptly to discuss
              next steps.
            </Contact.Header>
            <Contact.Grid contactInfo={contactInfo} />
          </Contact>
        </Footer>
      </Section>
    </Box>
  )
}
