import React from 'react'
import LeftBlock from './LeftBlock'
import RightBlock from './RightBlock'
import styles from './Blocks.module.css'
export default function Blocks() {
    

    return (
        <div className={styles.container}>
            <LeftBlock/>
            <RightBlock/>
        </div>
    )
}
