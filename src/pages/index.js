/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../componets/menu/layout"
import { graphql } from "gatsby"
import Hero from "../componets/hero"
import Seo from "../componets/Seo"

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        About
      }
    }
    file(relativePath: { eq: "Renovations-min.jpg" }) {
      childImageSharp {
        fluid( jpegProgressive: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
    site: {
      siteMetadata: { title, description, About },
    },
  },
}) => (
  <Layout>
    <Seo description="home" />
    <Hero title={title} description={description} imageFluid={fluid} />
    <h3
      sx={{
        marginTop: "70px",
      }}
    >
      About
    </h3>
    <p sx={{ width: "60%", textAlign: "center" }}>{About}</p>
  </Layout>
)
