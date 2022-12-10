import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { Mainlayout } from '../components/layouts/Mainlayout'
import styles from '../components/layouts/Mainlayout.module.css'



export default function AboutPage() {

  //? Todos los componentes deben de iniciar con la primera letra capitalizada y usa el export por default  
  return (
    <>

      <main className={styles.main}>
        <h1> About page </h1>
        <h1 className={styles.title}>
          Ir al <Link href='/' >  Home </Link>
          {/* Ir al  <a href="/"> Home </a> */}
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>

      </main>
    </>
  )
}


AboutPage.getLayout = function getLayout (page: JSX.Element ) {
  return(
    <Mainlayout>
    <DarkLayout>
        { page}
    </DarkLayout>
    </Mainlayout>
  )
}