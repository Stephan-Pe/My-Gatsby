import { Link, graphql, useStaticQuery } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

import headerStyle from './header.module.scss'

const Header = () => { 
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
  `)
  return (
  <header className={headerStyle.header}>
    <div>
  <h2><Link className={headerStyle.mytitle} to="/">{data.site.siteMetadata.title}</Link></h2> 
      <ul className={headerStyle.nav__list}>
        <li><Link className={headerStyle.nav__listItem} activeClassName={headerStyle.activeNav__item} to="/">Home</Link></li>
        <li><Link className={headerStyle.nav__listItem} activeClassName={headerStyle.activeNav__item} to="/page-2/">About</Link></li>
        <li><Link className={headerStyle.nav__listItem} activeClassName={headerStyle.activeNav__item} to="/blog/">Blog</Link></li>
      </ul>
    </div>
  </header>
)
}
/*Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}*/

export default Header
