require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const contentfulConfig = {
//   spaceId: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// }

const gtmConfig = {
  gtmId: process.env.GTM_ID,
}

const { gtmId } = gtmConfig

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
// if (process.env.CONTENTFUL_HOST) {
//   contentfulConfig.host = process.env.CONTENTFUL_HOST
// }

// const { spaceId, accessToken } = contentfulConfig

// if (!spaceId || !accessToken) {
//   throw new Error(
//     'Contentful spaceId and the access token need to be provided.'
//   )
// }

module.exports = {
  pathPrefix: '/sales',

  siteMetadata: {
    title: 'Bear University',
    titleTemplate: '%s · The Real College',
    description:
      'Founded in 1942, Bear University is a leading institution in America with more than 50 online degree programs. Learn more about our great academic opportunities!',
    url: 'https://www.bearuniversity.com', // No trailing slash allowed!
    image: '/images/favicon.ico',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts/`,
      },
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://www.youvisit.com/tour/Embed/js3',
        // crossorigin: 'anonymous',
        // onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Undergrad Home`,

        defaultCrumb: {
          location: {
            pathname: '/',
          },
          crumbLabel: 'Undergrad Home',
          crumbSeparator: ' / ',
        },
        crumbLabelUpdates: [
          {
            pathname: '/undergraduate-admissions',
            crumbLabel: 'Undergraduate Admissions',
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: contentfulConfig,
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400, 400i,600,700,800`,
          // `source sans pro\:300,400,600,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtmId,

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
      },
    },
  ],
}
