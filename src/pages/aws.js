import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AWSPage = () => (
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
      <h1>AWS for Bioinformatics</h1>
      <section>
        {/* <p>
          <label for="mn-figure-1" class="margin-toggle">⊕</label>
          <input type="checkbox" id="mn-figure-1" class="margin-toggle" />
          <span class="marginnote" >
            <img src={SalkImage} alt="Image of the Salk Institute" />
             Photograph of the Salk Institute for Biological Studies, by the author.
          </span>
        </p> */}
        <p>
          Our bioinformatics group at Salk uses AWS extensively. On the plus side, it's an extremely feature-complete
          platform. On the minus side, it's pretty complex. There are often a bunch of different ways to accomplish the same thing,
          making it harder to pick which option to go with. In this post, I'll go through some of the services AWS offers,
          some of the use-cases that have come up in my work, and which AWS services are applicable in each case.
        </p>
      </section>
      <section>
        <h2>Elastic Compute (EC2)</h2>
        <p>
          EC2 is your basic virtual machine (VM) service. It lets you create virtual machines based on a huge variety
          of machine images (AMIs). You can run basically any workload on an EC2 instance, but you also don't get much
          help in terms of managing the instance. You have to install and configure everything yourself. It's a good
          choice if you want to run a single application, and you want to manage it yourself.
        </p>
      </section>
      <section>
        <h2>Elastic Kubernetes Service (EKS)</h2>
        <p>
          EKS is a managed Kubernetes service. Kubernetes is one of the most popular container orchestration platforms.
          It's a bit like Docker, but it's more powerful. It lets you run containers on a cluster of machines, and it
          handles a lot of the complexity of managing those containers. It's a bit more complex than EC2, but it's also
          more powerful. It's a good choice if you want to run a bunch of containers, and you want to manage them yourself.
        </p>
      </section>
      <section>
        <h2>Fargate</h2>
        <p>
          Fargate is a managed container service. It's a bit like EKS, but it's more lightweight. You don't have to manage
          the Kubernetes cluster, you just run your containers. It's a bit more limited than EKS, but it's also easier to use.
        </p>
      </section>
      <section>
        <h2>Elastic Container Service (ECS)</h2>
        <p>
          ECS is a managed container service. It's a bit like Fargate, but it's more powerful. You can run containers on
          a cluster of machines, and it handles a lot of the complexity of managing those containers. It's a bit more
          complex than Fargate, but it's also more powerful. It's a good choice if you want to run a bunch of containers,
          and you want to manage them yourself. It's a bit more limited than EKS, but it's also easier to use.
        </p>
      </section>
      <section>
        <h2>Batch</h2>
        <p>
          Batch lets you queue up a bunch of jobs and run them in the cloud. The actual jobs are run on Fargate, EKS, or ECS.
          From the <a href="https://aws.amazon.com/batch/faqs">Batch FAQ</a>:
          
          <blockquote>
            You should run your jobs on Fargate when you want AWS Batch to handle provisioning of compute completely abstracted from ECS infrastructure. You should run your jobs on ECS if you need access to particular instance configurations (particular processors, GPUs, or architecture) or for very-large scale workloads. If you have chosen Kubernetes as your container orchestration technology, you can standardize your batch workloads using Batch integration with EKS.
            Depending on your use case, currently Fargate jobs will start faster in the case of initial scale-out of work, as there is no need to wait for EC2 instance or pods to launch. However, for larger workloads EKS or ECS may be faster as Batch reuses instances and container images to run subsequent jobs.
          </blockquote>

        </p>
      </section>
      <section>
        <h2>Lightsail</h2>
        <p>
          Lightsail is a managed VM service. It lets you create virtual machines from a very nice web interface.
          It also lets you run container workloads on those VMs. It also has a nice interface for managing domains.
          If you want to quickly spin up a VM or containerized workload, and you don't want to deal with the complexity
          of EC2, EKS, or ECS, Lightsail is a good choice. There's also a service called Lightsail Research, which is
          runs RStudio or Jupyter and optionally includes a GPU.
        </p>
      </section>
      <section>
        <h2>Lambda</h2>
        <p>
          Lambda is a serverless compute service. It lets you run code without having to manage a server. You just
          upload your code, and Lambda runs it for you.
        </p>
      </section>
      <section>
        <h2>S3</h2>
        <p>
          S3 is a managed object storage service. It lets you store files in the cloud. You can actually host a static website
          on S3, which makes it useful as a quick and easy way to host a website. It's recommended that you use CloudFront
          CDN to serve the website, but you can also just use S3 directly. With CloudFront CDN, you can also use Route 53
          to manage the domain, and WAF to add security rules like blocking IP addresses that are sending too many requests.
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
export const Head = () => <Seo title="Amazon Web Services (AWS) for Bioinformatics" />

export default AWSPage
