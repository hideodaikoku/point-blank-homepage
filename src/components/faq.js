import * as React from "react"
import { Container, Section, Box, Flex, Button, Space, Heading } from "./ui"

export default function FAQ() {
  return (
    <Section id="faq">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>FAQ</Heading>
          </Box>
          <Box>
            <Flex variant="center">ACCORDION</Flex>
          </Box>
        </Box>
      </Container>
    </Section>
  )
}
