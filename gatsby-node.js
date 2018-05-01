const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const fs = require('fs-extra')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const portfolio = path.resolve('./src/templates/portfolio.js')

    resolve(
      graphql(
        `
          {
            allContentfulPhotoGallery {
              totalCount
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create portfolio pages
        _.each(result.data.allContentfulPhotoGallery.edges, edge => {
          createPage({
            path: `/portfolio/${edge.node.id}`,
            component: slash(portfolio),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
  })
}
