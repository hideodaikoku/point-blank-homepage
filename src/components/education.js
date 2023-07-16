import * as React from "react"
import {
  Container,
  Section,
  Box,
  Kicker,
  Heading,
} from "./ui"

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
        </Box>
      </Container>
    </Section>
  )
}
