const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      allContentfulCon: { edges },
    },
  } = await graphql(`
    query MyQuery {
      allContentfulCon {
        edges {
          node {
            slug
            type
          }
        }
      }
    }
  `)

  edges.forEach(({ node: { slug, type } }) => {
    createPage({
      path: `${type}/${slug}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        slug,
      },
    })
  })

  edges.forEach(({ node: { type } }) => {
    createPage({
      path: type,
      component: path.resolve("./src/templates/blogType.js"),
      context: {
        type,
      },
    })
  })
}
