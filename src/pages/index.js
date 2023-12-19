import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
// import About from "../components/about"
import Steps from "../components/steps"
import Evaluations from "../components/evaluations-list"
import Education from "../components/education"
// import Leaderboard from "../components/leaderboard"
import Contact from "../components/contact"

export default function Homepage(props) {
  return (
    <Layout>
      <Hero/>
      <Steps/>
      <Evaluations/>
      <Education/>
      {/* <Leaderboard/> */}
      {/* <About/> */}
      <Contact/>
    </Layout>
  )
}

export function Head({ title, description }) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="facebook-domain-verification" content="477iq15h9424njbms0vzsjln5ls9ur" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {/* {image && <meta property="og:image" content={image.url} />} */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {/* {image && <meta name="twitter:image" content={image.url} />} */}
    </>
  )
}