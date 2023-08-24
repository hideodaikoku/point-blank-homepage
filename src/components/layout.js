import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"
import Head from "./head"
const Layout = ({ children }) => {
  return (
    <>
      <Head title="POINT BLANK CAPITAL" description="UAE'S LEADING PROPRIETARY TRADING FIRM."/>
      <Slice alias="header" />
      {children}
      <Slice alias="footer" />
    </>
  )
}

export default Layout
