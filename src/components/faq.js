import * as React from "react"
import { Container, Section, Box, Heading, Text } from "./ui"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

const faqData = [
  {
    question: "What is Point Blank Capital?",
    answer: "Point Blank Capital is a Proprietary Trading Firm. This means we partner with talented, profitable and consistent Traders across the globe to trade our internal capital and generate profits."
  },
  {
    question: "How do I Become a Point Blank Capital Trader?",
    answer: "Point Blank Capital partners with talented, profitable and consistent traders across the globe. To ensure we partner with only the very best, we have created an Evaluation System that allows a prospective Trader to demonstrate their skills in a simulated environment. Prospective Traders who meet the Evaluation criteria will be offered a Trading Partnership, an arrangement wherein the Trader is permitted to trade a predetermined amount of our internal capital, in exchange for an 80% split of the profits generated."
  },
  {
    question: "What are Point Blank Capital’s Evaluation Criteria?",
    answer: "Point Blank Capital evaluates several elements of a prospective Trader’s performance. In order to be successful at the Evaluation stage, a prospective Trader must reach the profit target of 10% of the initial account balance. The prospective Trader cannot lose more than 10% of the initial account balance, nor can they lose more than 5% of the initial account balance in a single trading day. A prospective Trader must place trades on at least 10 of the 30 Evaluation days. These criteria are designed to identify prospective Traders with profitable and consistent strategies."
  },
  {
    question: "Does Point Blank Capital Charge Any Hidden Fees or Monthly Subscriptions?",
    answer: "Point Blank Capital does not charge any hidden fees or monthly subscriptions - a prospective Trader will be charged only the Evaluation Fee, which is refunded upon successfully meeting the Evaluation criteria and paid out alongside their first profit split."
  },
  {
    question: "When Will Point Blank Capital Pay my Profit Split?",
    answer: "Point Blank Capital will pay out a Trader’s first profit split after 30 days. Subsequently, Traders are able to request a profit split up to once every 14 days. Traders should be aware that Point Blank Capital processes profit split payouts via bank transfer, and as such there may be a processing time of 3 to 5 days between requesting a profit split and receiving the deposited funds."
  },
  {
    question: "Does Point Blank Capital Have Any Restrictions on Nationality?",
    answer: "In general, no - Point Blank Capital welcomes talented, profitable and consistent Traders from across the globe regardless of nationality - the only requirement is for the prospective Trader to be in excess of 18 years of age. However, as a matter of international law, Point Blank Capital is unable to accept Traders from countries that appear on the OFAC sanctions list, and is also unable to accept Traders who appear as individuals on the OFAC sanctions list."
  },
  {
    question: "What Trading Software Does Point Blank Capital Offer?",
    answer: "Point Blank Capital offers the MetaTrader 4 platform to its Traders. MetaTrader 4 is known globally as the gold-standard for trading software, offering a range of features and utilities designed to assist and streamline the user’s trading process."
  },
  {
    question: "Where is Point Blank Capital Based?",
    answer: "Point Blank Capital is incorporated in the United Arab Emirates as POINT BLANK CAPITAL - FZCO, under the jurisdiction of the International Free Zones Authority. Our registered address is 29694 - 001, IFZA Business Park, DDP, Dubai, Emirate of Dubai, United Arab Emirates, and our Head Office is located at Floor 73, Etihad Towers, Al Bateen, Abu Dhabi, Emirate of Abu Dhabi, United Arab Emirates."
  },
  {
    question: "Is Point Blank Capital Regulated?",
    answer: "As a Proprietary Trading Firm exclusively engaged in the trading of its’ internal capital, Point Blank Capital is not subject to any specific securities regulations. We are not a brokerage firm, and we do not handle customer deposits or external capital in any form."
  },
  {
    question: "How can I contact Point Blank Capital?",
    answer: "Point Blank Capital’s Support Team is available by telephone, email and live chat from the hours of 9AM to 5PM Gulf Standard Time, Monday to Friday."
  }
];


export default function Faq() {
  return (
    <Section id="faq">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>FAQ</Heading>
          </Box>
          <Box>
            <Accordion>
              {faqData.map((faq, i) => (
                <AccordionItem key={i}>
                  <AccordionButton>
                    <Box >
                      <Text variant="caps">{faq.question}</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </Container>
    </Section>
  )
}
