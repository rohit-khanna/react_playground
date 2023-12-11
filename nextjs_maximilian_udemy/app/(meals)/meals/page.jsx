import Link from "next/link";
import styles from "./page.module.css";
import React from 'react'
import { MealsGrid } from "@/components/meals-grid";

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
        <MealsGrid meals={[]} />
      </main>
    </>
  )
}
export default MealsPage;