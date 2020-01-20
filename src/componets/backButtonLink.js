/** @jsx jsx */
import { jsx } from "theme-ui"
import ButtonLink from "./buttonLink"
import { FiArrowLeft } from "react-icons/fi"

export default ({ to }) => (
  <ButtonLink to={to} margin="10px">
    <FiArrowLeft /> Back to the {to} page
  </ButtonLink>
)
