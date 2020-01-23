require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `D.P. ECKLEY PROJECTS`,
    description: `(083) 264 7064`,
    SEOdescription:
      "I specialise in Home Improvement, Electrical, (HVAC) Air Conditioning and Ventilation, (LPG) Liquid Petroleum Gas installations, and TIG welding.",
    SEOkeywords: "Eckley Air Conditioning ",
    themeColor: "#8a0000",
    emailForFormSpree: "dpeckleyprojects@gmail.com",
    author: "kheagan",
    About:
      "I specialise in Home Improvement, Electrical, (HVAC) Air Conditioning and Ventilation, (LPG) Liquid Petroleum Gas installations,and TIG welding. So give me a call on 083 264 7064 so that I can help you out. Please explore the website further to see some of my work.",
    siteUrl: "https://dpeckleyprojects.com",
    twitterUsername: "kheaganD",
    image: "./Renovations-min.jpg",
    social: [
      {
        name: "Facebook",
        link: "https://web.facebook.com/?_rdc=1&_rdr",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/dp_eckley",
      },
    ],
    types: [
      {
        name:'Home Improvements',
        description:'DP Eckley Projects provides home improvement services that can transform your home’s interior and exterior. We perform renovation projects for all areas of your home.'
      },
      {
        name: "Electrical Installation",
        description:
          "DP Eckley Projects provides expert certified electricians that offer hassle free solutions to your electrical needs. Our services include Inspection, Installation and maintenance of electrical systems. Whether your project is big or small works DP Eckley Projects (Pty) Ltd provides electrical work that meets your needs while abiding with all industrial and domestic safety and electrical codes.",
      },
      {
        name: "Air Conditioning",
        description: "D.P. Eckley Projects provides installation and maintenance of split unit air conditioner",
      },
      {
        name: "Liquid Petrollium Gas (LPG)",
        description: "D.P. Eckley Projects provides installation and maintenance of Gas appliances. Installations are carried out according current codes and regulations by certified artisans.",
      },
      {
        name: "Partnership",
        description: "How we partner with you to get the best result from your renovation project.",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Russo One`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "ww370scvu46h",
        accessToken: "HJX_oLAcVQso-nG2geJOWdwpRdZ3UDN2NcaZ9eA1Pi4",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daivd Eckley Projects`,
        short_name: `D.E.P.`,
        start_url: `/`,
        background_color: `#8a0000`,
        theme_color: `#8a0000`,
        display: `minimal-ui`,
        icon: `src/images/DPECKLEYPROJECTS500.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dpeckleyprojects.com',
        sitemap: 'https://dpeckleyprojects.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
