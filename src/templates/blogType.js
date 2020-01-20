/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../componets/menu/layout"
import Card from "../componets/card"
import FlexWrap from "../componets/flexWrap"
import AniHeader from "../componets/ANiHeader"
import Seo from "../componets/Seo"
import BackButtonLink from "../componets/backButtonLink"

export const query = graphql`
  query MyQueryType($type: String) {
    allContentfulCon(filter: { type: { eq: $type } }) {
      edges {
        node {
          image {
            fluid(maxWidth: 370) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          type
          title
          slug
          description
        }
      }
    }
    site {
      siteMetadata {
        types {
          description
          name
        }
      }
    }
  }
`

export default ({
  data: {
    allContentfulCon: { edges },
    site: {
      siteMetadata: { types },
    },
  },
}) => (
  <Layout>
    <Seo description={edges[0].node.type} />

    <AniHeader AniText={edges[0].node.type} />
    <AniHeader
      fontSize="1em"
      AniText={
        types.filter(({ name }) => name === edges[0].node.type)[0].description
      }
    />

    <div sx={{ width: "92%" }}>
      <FlexWrap>
        {edges.map(({ node: { type, title, description, image, slug } }) => (
          <Card
            key={title}
            header={title}
            description={description}
            ImageFluid={image.fluid}
            to={`${type}/${slug}`}
          />
        ))}
      </FlexWrap>
    </div>

    <BackButtonLink to="Browse" />
  </Layout>
)
