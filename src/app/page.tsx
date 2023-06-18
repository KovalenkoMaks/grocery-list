import style from './page.module.css'
import { SignInLink } from "@/components/signInLink/SignInLink";
export const metadata = {
  title: 'Grocery',
  description: 'Create your grocery list and save your money',
}

export default function Home() {
  return (
    <main>
      <section className={style.homePage}>
        <h1 className={style.title}>Create your Grocery list - save your time and money</h1>
        <SignInLink />
      </section>
    </main>
  )
}
