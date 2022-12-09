
import Link from 'next/link'
import { Mainlayout } from '../components/layouts/Mainlayout'
import styles from '../components/layouts/Mainlayout.module.css'


export default function Home() {

  //? Todos los componentes deben de iniciar con la primera letra capitalizada y usa el export por default  
  return (
    <Mainlayout>
      <main className={styles.main}>
        <h1> Home page </h1>
        <h1 className={styles.title}>
            Ir al <Link href='about' > About  </Link>
          {/* Ir al  <a href="/about"> Abut </a> */}
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>

    </Mainlayout>
  )
}
