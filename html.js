import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

import favicon from './assets/favicon.png'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }
    return (
      <html lang="en">
        <head>
          <meta name="google-site-verification" content="pQs2MLkUPukitQ1BWDwlWbvSNU4g50VLiT0KnDYY5QU" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,700&subset=latin,latin-ext" rel="stylesheet" type="text/css" />
          <link rel="icon" type="image/ico" href={favicon} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {css}
        </head>
        <body>
        <div id="banner">
          <div id="banner-content">
            This website served the ETC community from July 2016 until
            April 2018.  It was replaced by
            a <a href="https://ethereumclassic.org">new WordPress site</a> built
            by <a href="https://etccoperative.org">ETC Cooperative</a>, which
            looks great, but the content is already outdated.
            Only the admins could update it.<br/>
            We will bring this website's content back up to date and
            then improve the design.
          </div>
        </div>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
