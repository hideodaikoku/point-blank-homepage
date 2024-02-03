import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Steps from "../components/steps"
import Evaluations from "../components/evaluations-list"
import Faq from "../components/faq"
// import Leaderboard from "../components/leaderboard"
import Contact from "../components/contact"

export default function Homepage(props) {
  return (
    <Layout>
      <Hero/>
      <Steps/>
      <Evaluations/>
      <Faq/>
      {/* <Leaderboard/> */}
      <About/>
      <Contact/>
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="facebook-domain-verification" content="477iq15h9424njbms0vzsjln5ls9ur" />
      <title>Point Blank Capital</title>
      <meta
        name="description"
        property="og:description"
        content="WELCOME TO A WORLD-CLASS PROPRIETARY TRADING FIRM"
      />
      <meta property="og:title" content="Point Blank Capital" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Point Blank Capital" />
    </>
  )
}