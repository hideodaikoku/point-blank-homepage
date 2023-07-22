import * as React from "react"
import {
  Container,
  Section,
  Box,
  Kicker,
  Heading,
  Flex,
  Text,
  Link,
  FlexList,
} from "./ui"
import { Twitter, Facebook, Youtube, Instagram, FileText} from "react-feather"
import { StaticImage } from "gatsby-plugin-image"

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>
              <Kicker>GET IN TOUCH</Kicker>
              CONTACT US
            </Heading>
          </Box>
        </Box>

        <Flex variant="responsiveTopCondensed">
          <Box width="half">
            <StaticImage
              rounded
              alt="CEO, Koki Serada & CIO Daniel Howie"
              src="../images/place-holder-image.png"
            />
          </Box>
          <Box width="half">
            <Flex variant="start">
              <StaticImage src="../images/building.svg" width={24} />
              <Text variant="subheadSmall">Address</Text>
            </Flex>
            <Text>
              Point Blank Capital - FZCO, Tower 2, Unit 7302, Etihad Towers,
              King Abdullah bin Abdulaziz al Saud Street, Al Bateen, Abu Dhabi,
              Emirate of Abu Dhabi, United Arab Emirates
            </Text>
            <Flex variant="start">
              <StaticImage src="../images/email.svg" width={24} />
              <Text variant="subheadSmall">Email</Text>
            </Flex>
            <Text>
              <Link href="mailto:mail@email.com">mail@email.com</Link>
            </Text>
            <Flex variant="start">
              <StaticImage src="../images/phone.svg" width={24} />
              <Text variant="subheadSmall">Phone</Text>
            </Flex>
            <Text>+00-000-000-0000</Text>
            <FlexList>
              <Link href="https://facebook.com">
                <Facebook />
              </Link>
              <Link href="https://twitter.com">
                <Twitter />
              </Link>
              <Link href="https://instagram.com">
                <Instagram />
              </Link>
              <Link href="https://youtube.com">
                <Youtube />
              </Link>

              <Link href="https://discord.com">
                <StaticImage src="../images/discord.svg" width={30} />
              </Link>

              <Link href="https://blogspot.com">
                <FileText />
              </Link>
            </FlexList>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
