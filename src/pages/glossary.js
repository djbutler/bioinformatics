import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ImportExportImage from "../images/exports-imports.png"
import RhinoImage from "../images/rhino.png"

const GlossaryPage = ({ data }) => {

  const sortEdgesByKey = (key) => {
    return function(a, b) {
        if (a['node'][key].toLowerCase() < b['node'][key].toLowerCase()) {
            return -1;
        } else if (a['node'][key].toLowerCase() > b['node'][key].toLowerCase()) {
            return 1;
        }
        return 0;
    };
  }

  return (
    <Layout>
      <article>
        <h1>Glossary</h1>
        <section>
          <h2 style={{marginBottom: '40px'}}>Terms</h2>
          {
            data.allTermsYaml.edges.sort(sortEdgesByKey('term')).map(({ node }) => (
              <p style={{margin: '0px'}}><a href={'#' + node.term.toLowerCase()}><em>{node.term}</em></a></p>
            ))
          }
        </section>
        <section>
          <h2 style={{marginBottom: '40px'}}>Definitions</h2>
          {
            data.allTermsYaml.edges.sort(sortEdgesByKey('term')).map(({ node }) => (
              <p id={node.term.toLowerCase()}>
                <p style={{marginBottom: '5px'}}><em>{node.term}</em></p>
                <p style={{marginLeft: '15px', marginTop: '0px'}}>{node.definition}</p>
              </p>
            ))
          }
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GlossaryQuery {
    allTermsYaml {
      edges {
        node {
          term
          definition
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Glossary" />

export default GlossaryPage
