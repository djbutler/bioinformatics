import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ImportExportImage from "../images/exports-imports.png"
import SalkImage from "../images/salk.png"

const IndexPage = () => (
  <Layout>
    {/* <nav style={{position: 'fixed', marginLeft: '-100px '}}>
      <ul>
        <li><Link to="/bioinformatics">Bioinformatics</Link></li>
        <li><Link to="/deep-learning">Deep Learning</Link></li>
        <li><Link to="/data-science">Data Science</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav> */}
    <article>
      <h1>Notes on Bioinformatics</h1>
      <p class="subtitle">Dan Butler</p>
      <section>
        <p>
          <label for="mn-figure-1" class="margin-toggle">⊕</label>
          <input type="checkbox" id="mn-figure-1" class="margin-toggle" />
          <span class="marginnote" >
            <img src={SalkImage} alt="Image of the Salk Institute" />
             Photograph of the Salk Institute for Biological Studies, by the author.
          </span>
        </p>        
        <p>
          I am a bioinformatician at the <a href="https://www.salk.edu/">Salk Institute for Biological Studies</a> in La Jolla, California.
          My prior work is mostly in the area of computer vision, so bioinformatics is a new field for me.
        </p>
        <p>
          These pages are my notes on bioinformatics, written mostly to help educate myself.
          Creating visual representations of ideas helps me remember them more easily, and it's
          also more fun than just writing bland notes.
        </p>
        <p>
          The idea is to create articles on different topics that I encounter in the course of my
          work in bioinformatics. Each article should be a mostly self-contained unit of thought,
          but there may be a certain amount of chaotic cross-referencing between articles.
        </p>
        <p>
          Also, I will develop a <Link to="glossary">glossary</Link> of terms as I go along.
        </p>
        <p>
          If you find these materials helpful, or you have any questions or comments, please feel free
          to <a href="mailto:dbutler@salk.edu">email me</a>.
        </p>
      </section>
    </article>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Bioinformatics" />

export default IndexPage
