import * as React from "react"
import {
  Container,
  Section,
  Box,
  Kicker,
  Heading,
  Flex,
} from "./ui"
import Evaluation from "./evaluation"

const content = [
  {
    id: "0",
    heading: "$50,000 Evaluation",
    features: ["30 Day Evaluation", "10 Minimum Trading Days", "15% Profit Target", "10% Maximum Loss", "5% Maximum Daily Loss", "80% Profit Split"],
    price: "$500 Evaluation Fee",
    link: "https://google.com/"
  },
  {
    id: "1",
    heading: "$250,000 Evaluation",
    features: ["30 Day Evaluation", "10 Minimum Trading Days", "15% Profit Target", "10% Maximum Loss", "5% Maximum Daily Loss", "80% Profit Split"],
    price: "$2,500 Evaluation Fee",
    link: "https://google.com/"
  },
  {
    id: "2",
    heading: "$500,000 Evaluation",
    features: ["30 Day Evaluation", "10 Minimum Trading Days", "15% Profit Target", "10% Maximum Loss", "5% Maximum Daily Loss", "80% Profit Split"],
    price: "$5,000 Evaluation Fee",
    link: "https://google.com/"
  },
]

export default function Evaluations() {
  return (
    <Section id="evaluations">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>
              <Kicker>PRICING</Kicker>
              EVALUATIONS
            </Heading>
          </Box>
          <Flex variant="responsiveTop">
            {content.map((plan, i) => (
              <Evaluation key={plan.id} {...plan} flip={Boolean(i % 2)} />
            ))}
          </Flex>
        </Box>
      </Container>
    </Section>
  )
}
