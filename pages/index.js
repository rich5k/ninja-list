import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat ipsam beatae ea ad distinctio ab accusantium suscipit adipisci assumenda voluptatem molestiae quae explicabo, amet consequatur enim repellat dolorem veniam.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat ipsam beatae ea ad distinctio ab accusantium suscipit adipisci assumenda voluptatem molestiae quae explicabo, amet consequatur enim repellat dolorem veniam.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
      
    </div>
    </>
  )
}
