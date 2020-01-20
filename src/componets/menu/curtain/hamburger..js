/** @jsx jsx */
import { jsx } from "theme-ui"
import posed from "react-pose"

const LineStyle = {
  width: "35px",
  height: "3px",
  backgroundColor: "hamburgerBG",
  margin: "8px",
  borderRadius: "5px",
}

const LineTop = posed.div({
  down: {
    rotate: "130deg",
    y: 10.5,
  },
  up: {
    rotate: "0deg",
    y: 0,
  },
})

const LineMiddle = posed.div({
  down: {
    opacity: 0,
    x : 20 
  },
  up: {
    x:0,
    opacity: 1
  },
})

const LineBottom = posed.div({
  down: {
    rotate: "-130deg",
    y: -10.5,
  },
  up: {
    rotate: "0deg",
    y: 0,
  },
})

export default props => (
  <div {...props} sx={{ cursor: "pointer" }}>
    <LineTop pose={props.toggle} sx={LineStyle}></LineTop>
    <LineMiddle pose={props.toggle} sx={LineStyle}></LineMiddle>
    <LineBottom pose={props.toggle} sx={LineStyle}></LineBottom>
  </div>
)
