import Head from 'next/head'
import Fblogin from '../Components/Login/Fblogin'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Fblogin/>
    </div>
  )
}
