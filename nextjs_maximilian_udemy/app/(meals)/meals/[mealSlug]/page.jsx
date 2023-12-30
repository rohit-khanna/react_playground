import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import { getMealBySlug } from '@/lib/meals';

const MealDetailsPage = async ({ params }) => {
    const { image, title, creator_email, creator,
        summary, instructions
    } = await getMealBySlug(params.mealSlug)
    
    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={styles.headerText}>
                    <h1>{title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto:${creator_email}`}>{creator}</a>
                    </p>
                    <p className={styles.summary}>{summary}</p>
                </div>
            </header>
            <main>
                <p className={styles.instructions} dangerouslySetInnerHTML={{
                    __html: instructions.replace(/\n/g, '<br />'),
                }}></p>
            </main></>
    )
}
export default MealDetailsPage;