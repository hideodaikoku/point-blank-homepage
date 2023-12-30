import * as React from "react"
import { Box, Container, Flex, Heading, Section, Text, Link } from "./ui"
import { StaticImage } from "gatsby-plugin-image"
export default function About() {
  return (
    <Section id="about">
      <Container>
        <Flex gap={5} variant="responsiveTop">
          <Flex variant="column">
          <Heading as="h2">MEET OUR TEAM</Heading>
            <Box width="half">
              <StaticImage
                alt="The Point Blank Capital team"
                src="../images/point-blank-team.png"
              />
            </Box>
            <Flex variant="responsiveTop">
              <Box width="full">
                <div style={{ marginTop: "1rem" }}>
                  <Text variant="labelKicker">CIO</Text>
                  <Text variant="label">Daniel Leslie</Text>
                  <Text variant="label">
                    <Link href="mailto:cio@pointblankcap.com">cio@pointblankcap.com</Link>
                  </Text>
                </div>
              </Box>
              <Box width="full">
                <div style={{ marginTop: "1rem" }}>
                  <Text variant="labelKicker">COO</Text>
                  <Text variant="label">Koki Serada</Text>
                  <Text variant="label">
                    <Link href="mailto:coo@pointblankcap.com">coo@pointblankcap.com</Link>
                  </Text>
                </div>
              </Box>
              <Box width="full">
                <div style={{ marginTop: "1rem" }}>
                  <Text variant="labelKicker">CTO</Text>
                  <Text variant="label">Melody Fung</Text>
                  <Text variant="label">
                    <Link href="mailto:cto@email.com">cto@pointblankcap.com</Link>
                  </Text>
                </div>
              </Box>
              <Box width="full">
                <div style={{ marginTop: "1rem" }}>
                  <Text variant="labelKicker">CCO</Text>
                  <Text variant="label">Daphne Liang</Text>
                  <Text variant="label">
                    <Link href="mailto:cco@email.com">cco@pointblankcap.com</Link>
                  </Text>
                </div>
              </Box>
            </Flex>
          </Flex>
          {/* <Box width="half">
            <Heading as="h2">OUR STORY</Heading>
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
          </Box> */}
        </Flex>
      </Container>
    </Section>
  )
}
