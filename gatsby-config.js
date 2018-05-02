module.exports = {
  siteMetadata: {
    title: 'CheapTearOffs.com',
    description: 'E-Commerce site for CheapTearOffs.com',
    siteUrl: `https://www.example.com`,
    author: 'Rey Vera',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '6f5y4w1scbfu',
        accessToken:
          'd79d35a727624edbbd5681d4dc30117ecfc26e2ecb32e5f2c64cb68b911e293c',
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        name: 'cheaptearoffsstore',
        token: 'd58c703d46500efe4996cc38db86bfc2',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatstrap',
        short_name: 'Gatstrap',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'minimal-ui',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'poppins:200,300,400,500,600,700,800,900',
          'comfortaa:300,400,700',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
