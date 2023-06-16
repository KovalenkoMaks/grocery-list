import Link from "next/link";
import style from './page.module.css'

export const metadata = {
  title: 'Grocery',
  description: 'Create your grocery list and save your money',
}

export default function Home() {
  return (
    <main>
      <section className={style.homePage}>
        <h1 className={style.title}>Create your Grocery list - save your time and money</h1>
        <Link className={style.link} href={'/list'}>Create your list</Link>
      </section>
    </main>
  )
}
