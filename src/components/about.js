import * as React from "react"
import {
  Box,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Text,
  Link,
} from "./ui"
import { StaticImage } from "gatsby-plugin-image"
export default function About() {
  return (
    <Section id="about">
      <Container>
        <Flex gap={5} variant="responsiveTop">
          <Flex variant="column">
            <Flex variant="responsiveTop">
              <Box width="full">
                <StaticImage
                  alt="CEO, Koki Serada & CIO Daniel Howie"
                  src="../images/place-holder-image.png"
                />
                <div style={{ marginTop: "1rem" }}>
                  <Text variant="labelKicker">Chief Investment Officer</Text>
                  <Text variant="label">Daniel Leslie</Text>
                  <Text variant="label">
                    <Link href="mailto:email@email.com">email@email.com</Link>
                  </Text>
                </div>
              </Box>
              <Box width="full">
                <StaticImage
                  rounded
                  alt="CEO, Koki Serada & CIO Daniel Howie"
                  src="../images/place-holder-image.png"
                />
                <div style={{ marginTop: "1rem" }}>
                  <Text variant="labelKicker">Chief Operating Officer</Text>
                  <Text variant="label">Koki Serada</Text>
                  <Text variant="label">
                    <Link href="mailto:email@email.com">email@email.com</Link>
                  </Text>
                </div>
              </Box>

              <Box width="full">
                <StaticImage
                  alt="CEO, Koki Serada & CIO Daniel Howie"
                  src="../images/place-holder-image.png"
                />
                <div style={{ marginTop: "1rem" }}>
                  <Text variant="labelKicker">Chief Talent Officer</Text>
                  <Text variant="label">Melody Fung</Text>
                  <Text variant="label">
                    <Link href="mailto:email@email.com">email@email.com</Link>
                  </Text>
                </div>
              </Box>
            </Flex>
          </Flex>
          <Box width="half">
            <Heading as="h2">
              <Kicker>ABOUT US</Kicker>OUR STORY
            </Heading>
            <Box>
              <Text as="p">
                Point Blank Capital was formed in late 2022 by two best friends,
                Daniel Leslie and Koki Serada. As lifelong Traders, Dan and Koki
                saw a gap in the market for a Proprietary Trading Firm that
                really invests in its Traders growth and personal development.
              </Text>
              <Text as="p">
                They aimed to create a Proprietary Trading Firm that empowers
                Traders with all the resources they need to develop successful
                careers in the financial markets. By focusing on this goal,
                Point Blank Capital is revolutionising the Proprietary Trading
                industry
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
