import React from 'react'

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = () => (
    <Layout>
    <SEO title="Blog" />
    <h1>Hi people</h1>
    <p>New Blog will follow.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>

)


export default BlogPage