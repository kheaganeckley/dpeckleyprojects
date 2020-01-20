/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { FiSun, FiMoon } from "react-icons/fi"
import { GiHorseHead } from "react-icons/gi"

const COLOR_CHECKER = colorMode => {
  switch (colorMode) {
    case "light":
      return {
        name: "dark",
        icon: <FiSun />,
      }
    case "dark":
      return {
        name: "red",
        icon: <FiMoon />,
      }
    case "red":
      return {
        name: "light",
        icon: <GiHorseHead />,
      }
    default:
      return {
        name: "light",
        icon: <FiSun />,
      }
  }
}

export default () => {
  const [colorMode, setColorMode] = useColorMode()

  const HANDLE_CLICK = () =>
    //setColorMode(colorMode === "light" ? "dark" : "light")
    setColorMode(COLOR_CHECKER(colorMode).name)
  return (
    <div
      onClick={HANDLE_CLICK}
      sx={{
        marginRight: "40px",
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
      }}
    >
      {COLOR_CHECKER(colorMode).icon}
      {colorMode}
    </div>
  )
}
