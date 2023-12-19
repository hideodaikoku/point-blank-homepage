import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"
import Head from "./head"
const Layout = ({ children }) => {
  return (
    <>
      <Slice alias="header" />
      {children}
      <Slice alias="footer" />
    </>
  )
}

export default Layout
