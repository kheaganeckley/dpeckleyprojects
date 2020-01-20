/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Fragment } from "react"

const query = graphql`
  {
    site {
      siteMetadata {
        social {
          name
          link
        }
        types {
          name
        }
      }
    }
  }
`
export default () => {
  const {
    site: {
      siteMetadata: { social, types },
    },
  } = useStaticQuery(query)
  return (
    <footer
      sx={{
        backgroundColor: "footerBG",
        color: "footerText",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "700px",
        marginTop: "100px",
      }}
    >
      <h3>Menu</h3>
      <p
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "40px",
        }}
      >

            <i>
              <Link
                to='./'
                sx={{
                  textDecoration: "none",
                  color: "footerText",
                }}
              >
                Home
              </Link>
            </i>{" "}
            <br />

            <i>
              <Link
                to='./Browse'
                sx={{
                  textDecoration: "none",
                  color: "footerText",
                }}
              >
                Browse
              </Link>
            </i>{" "}
            <br />


        {types.map(({ name }) => (
          <Fragment key={name}>
            <i>
              <Link
                to={name}
                sx={{
                  textDecoration: "none",
                  color: "footerText",
                }}
              >
                {name}
              </Link>
            </i>{" "}
            <br />
          </Fragment>
        ))}
      </p>
      <i>
        <Link to="Contact" sx={{ color: "footerText" }}>
          Contact me here
        </Link>
      </i>
      <i sx={{ fontSize: "14px" }}>or on</i>
      <p
        sx={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {social.map(({ name, link }) => (
          <i
            key={name}
            sx={{
              margin: "10px",
            }}
          >
            <a
              href={link}
              sx={{
                textDecoration: "none",
                color: "footerText",
              }}
            >
              {name}
            </a>
          </i>
        ))}
      </p>
    </footer>
  )
}
