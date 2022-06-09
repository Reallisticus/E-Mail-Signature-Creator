import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Body from '../src/components/body.component'
import Header from '../src/components/header.component'
import useScript from '../src/hooks/useScript'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galaxy Signature Maker</title>
        <meta
          name='description'
          content='Easily generate signatures for all brands'
        />
        <link rel='icon' href='/favicon.png' />
        <>{useScript('./scripts/utils.js')}</>
      </Head>
      <Header />
      <Body />
    </div>
  )
}

export default Home
