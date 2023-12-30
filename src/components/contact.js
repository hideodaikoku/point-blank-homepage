import * as React from "react"
import {
  Container,
  Section,
  Box,
  Heading,
  Flex,
  Text,
  Link,
  FlexList,
} from "./ui"
import { Twitter, Facebook, Youtube, Instagram, FileText } from "react-feather"
import { StaticImage } from "gatsby-plugin-image"

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>CONTACT US</Heading>
          </Box>
        </Box>

        <Flex variant="responsiveTopCondensed">
          <Box width="half">
            <StaticImage
              rounded
              alt="Point Blank Capital"
              src="../images/key-image.png"
              style={{ marginBottom: "30px" }}
            />
          </Box>
          <Box width="third">
            <Flex variant="start">
              <StaticImage src="../images/building.svg" width={24} />
              <Text variant="subheadSmall">Registered Address</Text>
            </Flex>
            <Text>
              29694-001, IFZA Business Park, DDP, Dubai, Emirate of Dubai,
              United Arab Emirates
            </Text>
            <Flex variant="start">
              <StaticImage src="../images/building.svg" width={24} />
              <Text variant="subheadSmall">Physical Address</Text>
            </Flex>
            <Text>
              Floor 73, Etihad Towers, King Abdullah bin Abdulaziz al Saud
              Street, Al Bateen, Abu Dhabi, Emirate of Abu Dhabi, United Arab
              Emirates
            </Text>
            <Flex variant="start">
              <StaticImage src="../images/notebook--reference.svg" width={24} />
              <Text variant="subheadSmall">License Number</Text>
            </Flex>
            <Text>DSO - FZCO -27735</Text>
            <Flex variant="start">
              <StaticImage src="../images/email.svg" width={24} />
              <Text variant="subheadSmall">Email</Text>
            </Flex>
            <Text>
              <Link href="mailto:support@pointblankcap.com">
                support@pointblankcap.com
              </Link>
            </Text>
            {/* <Flex variant="start">
              <StaticImage src="../images/phone.svg" width={24} />
              <Text variant="subheadSmall">Phone</Text>
            </Flex>
            <Text>+971 58 598 5937</Text> */}
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
