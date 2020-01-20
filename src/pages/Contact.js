/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../componets/menu/layout"
import Button from "../componets/button"
import Input from "../componets/input"
import AniHeader from "../componets/ANiHeader"
import Seo from "../componets/Seo"
import { graphql, useStaticQuery } from "gatsby"
import {FiSend} from 'react-icons/fi'

const query = graphql`
  {
    site {
      siteMetadata {
        emailForFormSpree
      }
    }
  }
`

export default () => {
  const {
    site: {
      siteMetadata: { emailForFormSpree },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Seo description="Contact" />
      <AniHeader AniText="Contact me" />
      <AniHeader AniText="my number is (083) 264 7064" />
      <form
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
          marginBottom: "200px",
        }}
        action={`https://formspree.io/${emailForFormSpree}`}
        method="POST"
      >
        Name: <Input type="text" name='name' placeholder="Type in your name" />
        Email: <Input type="text" name='_replyto' placeholder="Type in your email adress" />
        Message:
        <Input
          type="text"
          name='message'
          placeholder="Type in a message and I will get back asap"
        />
        <Button><FiSend/> SEND</Button>
      </form>
    </Layout>
  )
}
