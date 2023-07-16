import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Steps from "../components/steps"
import Evaluations from "../components/evaluations-list"
import Education from "../components/education"
import Leaderboard from "../components/leaderboard"
import Contact from "../components/contact"

export default function Homepage(props) {
  return (
    <Layout>
      <Hero/>
      <Steps/>
      <Evaluations/>
      <Education/>
      <Leaderboard/>
      <About/>
      <Contact/>
    </Layout>
  )
}