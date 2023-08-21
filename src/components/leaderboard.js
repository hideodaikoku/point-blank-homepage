import * as React from "react"
import { Container, Section, Box, Heading, Flex } from "./ui"
import { TableContainer, Table, Th, Td, Image } from "./leaderboard.css"

const leaderboard = [
  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },
  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },
  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },
  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },

  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },

  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },

  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },

  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },

  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },

  {
    profilePicture: "https://i.pravatar.cc/30",
    firstName: "Kumar",
    country: "India",
    accountSize: "$500,000",
    monthlyGainPercent: 20,
    monthlyGainDollars: "$1,000",
  },
]

export default function Education() {
  return (
    <Section id="leaderboard">
      <Container>
        <Box>
          <Box center paddingY={2}>
            <Heading>
              LEADERBOARD
            </Heading>
          </Box>
          <Flex variant="center">
            <div className={TableContainer}>
              <table className={Table}>
                <thead>
                  <tr>
                    <th className={Th}></th>
                    <th className={Th}>Rank</th>
                    <th className={Th}>First Name</th>
                    <th className={Th}>Country</th>
                    <th className={Th}>Account Size</th>
                    <th className={Th}>Monthly Gain (%)</th>
                    <th className={Th}>Monthly Gain ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((row, i) => (
                    <tr key={i}>
                      <td>
                        <Flex variant="center">
                          <img
                            src={row.profilePicture}
                            alt={`Profile of ${row.firstName}`}
                            className={Image}
                          />
                        </Flex>
                      </td>
                      <td className={Td}>{i + 1}</td>
                      <td className={Td}>{row.firstName}</td>
                      <td className={Td}>{row.country}</td>
                      <td className={Td}>{row.accountSize}</td>
                      <td className={Td}>{row.monthlyGainPercent}%</td>
                      <td className={Td}>{row.monthlyGainDollars}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Flex>
        </Box>
      </Container>
    </Section>
  )
}