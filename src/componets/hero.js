/** @jsx jsx */
import { jsx } from "theme-ui"
import posed, { PoseGroup } from "react-pose"
import BackgroundImage from "gatsby-background-image"
import ButtonLink from "../componets/buttonLink"
import { FaTools } from "react-icons/fa"

const BoxPose = posed.div({
  enter: {
    delay: "50ms",
    y: 0,
    opency: 1,
  },
  exit: {
    y: -30,
    opency: 0,
  },
})

const TitlePose = posed.h1({
  enter: {
    y: 0,
    opency: 1,
  },
  exit: {
    y: -30,
    opency: 0,
  },
})

const DescriptionPose = posed.i({
  enter: {
    y: 0,
    opency: 1,
  },
  exit: {
    y: -30,
    opency: 0,
  },
})

const TextBoxAndButton = ({ title, description, to }) => (
  <PoseGroup>
    <BoxPose
      key="myPosedGroup"
      initialPose="exit"
      sx={{
        width: "100%",
        height: "500px",
        opacity: 0.9,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "heroText",
        fontSize: "40px",
        textAlign: "center",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitlePose
          sx={{
            opacity: 1,
            backgroundColor: "heroBG",
            color: "heroText",
            letterSpacing: "10px",
            fontSize: "50px",
            marginBottom: 17,
          }}
        >
          {title}
        </TitlePose>

        <DescriptionPose
          sx={{
            backgroundColor: "heroBG",
            color: "heroText",
            letterSpacing: "7px",
            fontSize: "30px",
            marginBottom: "9px",
          }}
        >
          {description}
        </DescriptionPose>

        <ButtonLink to={to}>
          <FaTools /> GET STARTED
        </ButtonLink>
      </div>
    </BoxPose>
  </PoseGroup>
)

export default ({ title, description, imageFluid, to = "Browse" }) => (
  <BackgroundImage
    Tag={`section`}
    id={`media-test`}
    fluid={imageFluid}
    sx={{
      height: "100%",
      width: "100%",
      backgroundRepeat: "repeat-y",
      backgroundSize: "cover",
    }}
  >
    <TextBoxAndButton title={title} description={description} to={to} />
  </BackgroundImage>
)
