/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../componets/menu/layout"
import Img from "gatsby-image"
import AniHeader from "../componets/ANiHeader"
import Seo from "../componets/Seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import BackButtonLink from "../componets/backButtonLink"
import posed from "react-pose"

const AniRight = posed.div({
  exit: { opacity: 0, y: "-180%", x: "-70%" },
  enter: {
    opacity: 1,
    y: 0,
    x: "0",
  },
})

export const query = graphql`
  query MyQueryTwo($slug: String) {
    contentfulCon(slug: { eq: $slug }) {
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      slug
      title
      type
      description
      body {
        json
      }
    }
  }
`

export default ({
  data: {
    contentfulCon: {
      body,
      title,
      description,
      slug,
      type,
      image: { fluid },
    },
  },
}) => (
  <Layout>
    <Seo description={`${type}/${slug}`} />
    <AniHeader AniText={title} />

    <div
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <i
          sx={{
            marginBottom: "20px",
          }}
        >
          <AniHeader AniText={description} fontSize="1.6em" />
        </i>
      </div>
      <AniRight initialPose="exit" pose="enter">
        <article>{body ? documentToReactComponents(body.json) : null}</article>
      </AniRight>
      <div
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BackButtonLink to={type} />
        <BackButtonLink to='Browse'/>
        <Img
          sx={{
            width: "100%",
            maxWidth: "700px",
          }}
          fluid={fluid}
        />
      </div>
    </div>
  </Layout>
)
