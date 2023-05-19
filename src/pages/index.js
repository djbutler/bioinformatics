import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ImportExportImage from "../images/exports-imports.png"
import RhinoImage from "../images/rhino.png"

const IndexPage = () => (
  <Layout>
    <article>
      <h1>Bioinformatics</h1>
      <p class="subtitle">Dan Butler</p>
      <section>
        <h2 id="getting-started">Getting Started</h2>
        <p><span class="newthought">To use Tufte CSS</span>, copy <code>tufte.css</code> and the <code>et-book</code> directory of font files to your project directory, then add the following to your HTML document’s <code>head</code> block:</p>
        <pre><code>&lt;link rel="stylesheet" href="tufte.css"/&gt;</code></pre>
        <p>Now you just have to use the provided CSS rules,
          and the Tufte CSS conventions described in this document.
          For best results, View Source and Inspect Element frequently
          <label for="sn-in-his-later-books" class="margin-toggle sidenote-number"></label>
          <input type="checkbox" id="sn-in-his-later-books" class="margin-toggle" />
          <span class="sidenote">
            <a href="http://www.edwardtufte.com/tufte/books_be">
              <em>Beautiful Evidence</em>
            </a>
          </span>.</p>
      </section>
      <section>
        <h2>Formatting</h2>
        <p>
          This is the section where I will talk about formatting.
          Indeed, I will talk about formatting in this section.
          I will talk about formatting in this section, indeed.
          I will talk about formatting in this section, indeed.
          I will talk about formatting in this section, indeed.&nbsp; 
          <span class="marginnote">
            Blue text, while also a widely recognizable clickable-text indicator,
            is crass and distracting. Luckily, it is also rendered unnecessary by
            the use of underlining.</span>
          I will talk about formatting in this section, indeed. I will talk about formatting in this section, indeed.
        </p>
        <p>
          This is the section where I will talk about rhinoceri. Indeed, I will talk about rhinoceri in this section.
          I will talk about rhinoceri in this section, indeed. I will talk about rhinoceri in this section, indeed.
          I will talk about rhinoceri in this section, indeed. I will talk about rhinoceri in this section, indeed.
        </p>
        <figure>
          <label for="mn-exports-imports" class="margin-toggle">⊕</label>
          <input type="checkbox" id="mn-exports-imports" class="margin-toggle" />
          <span class="marginnote">From Edward Tufte, <em>Visual Display of Quantitative Information</em>, page 92.</span>
          <img src={ImportExportImage} alt="Exports and Imports to and from Denmark &amp; Norway from 1700 to 1780" />
        </figure>
        <p>
          <label for="mn-figure-1" class="margin-toggle">⊕</label>
          <input type="checkbox" id="mn-figure-1" class="margin-toggle" />
          <span class="marginnote" >
            <img src={RhinoImage} alt="Image of a Rhinoceros" />
            F.J. Cole, “The History of Albrecht Dürer's Rhinoceros in Zooological Literature,” <em>Science, Medicine, and History: Essays on the Evolution of Scientific Thought and Medical Practice</em> (London, 1953), ed. E. Ashworth Underwood, 337-356. From page 71 of Edward Tufte's <em>Visual Explanations</em>.
          </span>
          But tight integration of graphics with text is central to Tufte's work even when those graphics are ancillary to the main body of a text.
          In many of those cases, a margin figure may be most appropriate. To place figures in the margin, just wrap an image (or whatever) in a margin note inside a <code>p</code> tag, as seen to the right of this paragraph.
        </p>
        <p>
          The final section is just for filler. I will discussion deep learning. Indeed, I will talk about deep learning in this section.
          I will talk about deep learning in this section, indeed. I will talk about deep learning in this section, indeed.
          I will talk about deep learning in this section, indeed. I will talk about deep learning in this section, indeed.
          But no, I must not. I must talk about formatting in this section. I must talk about formatting in this section, indeed.
          I must talk about formatting in this section, indeed. I must talk about formatting in this section, indeed.
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
