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
import { Facebook, Youtube, Instagram, FileText } from "react-feather"
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
            <Text>DSO - FZCO - 27735</Text>
            <Flex variant="start">
              <StaticImage src="../images/email.svg" width={24} />
              <Text variant="subheadSmall">Email</Text>
            </Flex>
            <Text>
              <Link href="mailto:support@pointblankcap.com">
                support@pointblankcap.com
              </Link>
            </Text>
            <FlexList>
              <Link
                href="https://facebook.com/pointblankcap"
                alt="Follow us on Facebook"
              >
                <Facebook />
              </Link>
              <Link
                href="https://twitter.com/pointblankcap"
                alt="Follow us on X"
              >
                <StaticImage src="../images/x_logo.svg" width={22} />
              </Link>
              <Link
                href="https://instagram.com/pointblankcap"
                alt="Follow us on Instagram"
              >
                <Instagram />
              </Link>
              <Link
                href="https://youtube.com/@PointBlankCap "
                alt="Follow us on Youtube"
              >
                <Youtube />
              </Link>

              <Link href="https://discord.gg/jR5hNJF8" alt="Join us on Discord">
                <StaticImage src="../images/discord.svg" width={30} />
              </Link>

              <Link
                href="https://blog.pointblankcap.com/"
                alt="Follow our blog"
              >
                <FileText />
              </Link>
            </FlexList>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
