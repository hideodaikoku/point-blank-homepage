import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Section,
  Subhead,
} from "./ui"
import { StaticImage } from "gatsby-plugin-image"
export default function Hero(props) {
  const links = [
    {
      id: "0",
      href: "https://discord.gg/jR5hNJF8/",
      text: "GET STARTED NOW",
    },
  ]
  return (
    <Section>
      <Container>
        <Flex variant="fullHeight">
          <Flex gap={5} variant="responsive">
            <Box width="half">
              <Heading as="h1">
                WELCOME TO A WORLD-CLASS PROPRIETARY TRADING FIRM
              </Heading>
              <Subhead>
                We provide education, support and capital to traders across the
                globe.
              </Subhead>
              <ButtonList links={links} />
            </Box>
            <Box width="half">
              <Flex variant="center">
                <StaticImage
                  alt="POINT BLANK CAPITAL: THE WORLDS's LEADING PROPRIETARY TRADING FIRM."
                  src="../images/key-image.png"
                />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}
