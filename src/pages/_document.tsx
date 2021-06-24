import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="text-gray-400 bg-gray-900 body-font">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
