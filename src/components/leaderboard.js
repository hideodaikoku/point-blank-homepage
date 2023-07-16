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
    <Section id="leaderboard">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>
              <Kicker>COMPARE</Kicker>
              LEADERBOARD
            </Heading>
          </Box>
        </Box>
      </Container>
    </Section>
  )
}
