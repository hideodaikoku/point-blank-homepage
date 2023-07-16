import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
} from "./ui"
import { StaticImage } from "gatsby-plugin-image"
export default function Hero(props) {
  const links = [
    {
      id: "0",
      href: "https://google.com/",
      text: "GET STARTED NOW",
    },
  ]
  return (
    <Section>
      <Container>
        <Flex gap={5} variant="responsive">
          <Box width="half">
            <Heading as="h1">
              <Kicker>POINT BLANK CAPITAL</Kicker>
              WELCOME TO THE WORLDS'S LEADING PROPRIETARY TRADING FIRM.
            </Heading>
            <Subhead>
              We provide education, support and capital to traders across the
              globe.
            </Subhead>
            <ButtonList links={links} />
          </Box>
          <Box width="half">
              <StaticImage
                alt="POINT BLANK CAPITAL: THE WORLDS's LEADING PROPRIETARY TRADING FIRM."
                src="../images/key-image.png"
              />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}