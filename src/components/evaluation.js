import * as React from "react"
import {
  Container,
  Space,
  Flex,
  Box,
  Subhead,
  Button,
  Text,
} from "./ui"

export default function Evaluation(props) {
  return (
    <Container width="outline">
      <Flex variant="column">
        <Box>
          <Subhead>{props.heading}</Subhead>
          <Box>
            {props.features.map((feature) => (
              <Text variant="body">- {feature}</Text>
            ))}
          </Box>

          <Space size={3}/>
          <Box>
            <small>{props.price}</small>
          </Box>
          <Space size={3}/>
          <Button href={props.link}>SIGN UP NOW</Button>
        </Box>
      </Flex>
    </Container>
  )
}
