import * as React from "react"
import { Container, Flex, Box, Subhead, Kicker, Text } from "./ui"

export default function Step(props) {
  return (
      <Container>
        <Flex variant="column" gap={4}>
          <Box width="full" order={props.flip ? 1 : null}>
            <Subhead>
              <Kicker>{props.kicker}</Kicker>
              {props.heading}
            </Subhead>
            <Text variant="lead">{props.text}</Text>
          </Box>
        </Flex>
      </Container>
  )
}
