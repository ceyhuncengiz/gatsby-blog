/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { nominalTypeHack } from "prop-types"
import { unstable_batchedUpdates } from "react-dom"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `25%`
        }}>
          © {new Date().getFullYear()},
           Built with
          {` `}
          <a style={{
          textDecoration: 'none',
          color: 'rebeccapurple'
        }} href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
          {` `}
          by
          {` `}
          <a style={{
          textDecoration: 'none',
          color: 'rebeccapurple'
        }} href="https://github.com/ceyhuncengiz" target="_blank" rel="noreferrer">Ceyhun Cengiz</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
