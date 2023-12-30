import Link from "next/link";
import styles from "./page.module.css";
import React, { Suspense } from 'react'
import { MealsGrid } from "@/components/meals-grid";
import { getMeals } from "@/lib/meals";
import MealsLoadingPage from "./loading-out";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}


const MealsPage = () => {

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals created <span className={styles.highlight}> by You</span>
        </h1>
        <p>
          Choose your favourite receipe and cook it yourself. Its fun!!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">
            Share your Favourite Recipe
          </Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoadingPage/>}>
        <Meals />
        </Suspense>
      </main>
    </>
  )
}
export default MealsPage;