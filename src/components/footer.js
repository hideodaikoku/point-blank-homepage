import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
} from "./ui"
import BrandLogo from "./brand-logo"

const footerText =
  "All information provided on this site is intended solely for the purposes of educational related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Trading in financial markets is a high-risk activity and it is advised not to risk more than one can afford to lose. Point Blank Capital - FZCO does not provide any of the investment services listed in the (a) the Federal Commercial Transactions Law (Law No. 18 of 1993), (b) the Emirates Securities and Commodities Authority and Market Law (Law No. 4 of 2000) or (c) the UAE Central Bank Law (Law No. 10 of 1980). The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Point Blank Capital - FZCO is not a broker and does not accept deposits. The offered technical solution for the Point Blank Capital platforms and data feed is powered by institutional liquidity providers. The website www.pointblankcap.com is owned and operated by Point Blank Capital - FZCO. Made with GatsbyJS by WaveCut Studios, © 2023, Point Blank Capital - FZCO"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
        }
      }
    }
  `)

  const { links, meta, copyright } = data.layout.footer

  return (
    <Box as="footer" paddingY={4}>
      <Container>
      <Space size={5} />
        <NavLink to="/">
          <Flex>
            <BrandLogo />
            POINT BLANK CAPITAL
          </Flex>
        </NavLink>
        <Space size={3} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          {/* <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList> */}
          <Text variant="small">{copyright}</Text>
        </Flex>
        <Space size={3} />
        <Flex variant="start" responsive>
          <small>{footerText}</small>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
