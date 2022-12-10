
import Link from 'next/link'
import { Mainlayout } from '../../components/layouts/Mainlayout'
import styles from '../../components/layouts/Mainlayout.module.css'

export default function AboutPage() {

  //? Todos los componentes deben de iniciar con la primera letra capitalizada y usa el export por default  
  return (
    <Mainlayout>
       <main className={styles.main}>
        <h1> Contact  page </h1>
        <h1 className={styles.title}>
          Ir al <Link href='/' > About   </Link>
          {/* Ir al  <a href="/"> Home </a> */}
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact.js</code>
        </p>

      </main>
    </Mainlayout>
  )
}
