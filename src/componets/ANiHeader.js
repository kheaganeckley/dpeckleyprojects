/** @jsx jsx */
import { jsx } from "theme-ui"
import posed from "react-pose"
// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const AniHeader = posed.h1({
  exit: { opacity: 0, y: 20, x: "-150%" },
  enter: {
    opacity: 1,
    y: 0,
    x: "0",
  },
})

export default ({ AniText, fontSize = "2.5em" }) => (
  <AniHeader
    sx={{
      fontSize,
      color: "text",
      textAlign: "center",
    }}
    initialPose="exit"
    pose="enter"
  >
    {AniText}
  </AniHeader>
)
