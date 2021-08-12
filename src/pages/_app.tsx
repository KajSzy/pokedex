import { initNavigation } from '@noriginmedia/react-spatial-navigation'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import { Loader } from '../components'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()

  const handleRouteChange = () => {
    setLoading(true)
  }
  const handleRouteChangeComplete = () => {
    setLoading(false)
  }

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  initNavigation({
    debug: process.env.NODE_ENV === 'development',
    // throttle: 1000,
    // throttleKeypresses: true,
  })

  return (
    <>
      <Head>
        <title>Pokedex by KajSzy</title>
      </Head>
      <Component {...pageProps} />
      {isLoading && <Loader withDimmer />}
    </>
  )
}
