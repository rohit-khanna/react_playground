import React from 'react'
import MealItem from './meal-item'

export const MealsGrid = ({ meals }) => {
    return <ul>
        {meals.map(meal => <li key={meal.id}>
            <MealItem
                creator={meal.creator} image={meal.image}
                slug={meal.slug} title={meal.title} summary={meal.summary} />
        </li>)}
    </ul>
}
