import React from 'react'

 const MealDetailsPage = ({ params }) => {
    return (
        <main>
            <h2>Meal Details Page</h2>
            <p>`Details for {params.mealId}`</p>
        </main>
    )
}
export default MealDetailsPage;