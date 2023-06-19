import { getServerSession } from 'next-auth';
import style from './page.module.css'
import { SignInLink } from "@/components/signInLink/SignInLink";
export const metadata = {
  title: 'Grocery',
  description: 'Create your grocery list and save your money',
}

export default async function Home() {
  const session = await getServerSession();
  return (
      <section className={style.homePage}>
        <h1 className={style.title}>Create your Grocery list - save your time and money</h1>
        <SignInLink session={session} />
      </section>
  )
}
