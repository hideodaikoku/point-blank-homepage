import { style } from "@vanilla-extract/css"
import exp from "constants"

export const TableContainer = style({
  width: "100%",
  overflowX: "auto",
})

export const Table = style({
  width: "100%",
  borderCollapse: "collapse",
})

export const Th = style({
  padding: "8px",
  textAlign: "center",
})

export const Td = style({
  padding: "8px",
  textAlign: "center",
})

export const Image = style({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  clipPath: "circle(25px at center)",
})
