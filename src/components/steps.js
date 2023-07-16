import * as React from "react"
import {
  Container,
  Section,
  Box,
  Kicker,
  Heading,
  ButtonList,
  Flex,
} from "./ui"
import Step from "./step"

const content = [
  {
    id: "0",
    kicker: "STEP 1",
    heading: "Sign up for a trader evaluation",
    text: "Choose an account size from $50,000 all the way up to $500,000",
  },
  {
    id: "1",
    kicker: "STEP 2",
    heading: "Trade for 30 days",
    text: "Prove your strategy is profitable and consistent",
  },
  {
    id: "2",
    kicker: "STEP 3",
    heading: "Get access to our capital",
    text: "Trade with up to $500,000 of our capital and keep 80% of your profits",
  },
]

const cta = [
  {
    id: "0",
    href: "https://google.com/",
    text: "SIGN UP NOW",
  },
]

export default function Steps() {
  return (
    <Section id="getting-started">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>
              <Kicker>GETTING STARTED</Kicker>
              HOW IT WORKS
            </Heading>
          </Box>
          <Flex variant="responsiveTop">
            {content.map((step, i) => (
              <Step key={step.id} {...step} flip={Boolean(i % 2)} />
            ))}
          </Flex>
        </Box>

        <Flex variant="center">
          <ButtonList links={cta} />
        </Flex>
      </Container>
    </Section>
  )
}
