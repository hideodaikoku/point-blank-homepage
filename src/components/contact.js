import * as React from "react"
import {
  Container,
  Section,
  Box,
  Kicker,
  Heading,
} from "./ui"

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>
              <Kicker>GET IN TOUCH</Kicker>
              CONTACT
            </Heading>
          </Box>
        </Box>
      </Container>
    </Section>
  )
}
