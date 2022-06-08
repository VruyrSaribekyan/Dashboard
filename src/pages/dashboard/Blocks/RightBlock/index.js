import React from 'react'
import RightBlockComponents from './RightBlockComponents'
import styles from './RightBlock.module.css'
export default function RightBlock() {
    

    return (
        <div className={styles.container}>
            <RightBlockComponents/>
        </div>
    )
}
