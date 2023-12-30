import React from 'react'
import MealItem from './meal-item'
import styles from "./meals-grid.module.css"

export const MealsGrid = ({ meals }) => {
    return <ul className={styles.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealItem
                creator={meal.creator} image={meal.image}
                slug={meal.slug} title={meal.title} summary={meal.summary} />
        </li>)}
    </ul>
}
