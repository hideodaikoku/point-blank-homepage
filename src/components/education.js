import * as React from "react"
import {
  Container,
  Section,
  Box,
  Kicker,
  Flex,
  Button,
  Space,
  Heading,
} from "./ui"
import YoutubeEmbed from './youtube-embed'

export default function Education() {
  return (
    <Section id="education">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>
              <Kicker>LEARN</Kicker>
              EDUCATION
            </Heading>
          </Box>
          <Box>
            <YoutubeEmbed/>
          </Box>
          <Space size={3}/>
          <Flex variant="center">
            <Button variant="primary" href="https://blogspot.com/">Learn More</Button>
          </Flex>
        </Box>
      </Container>
    </Section>
  )
}
