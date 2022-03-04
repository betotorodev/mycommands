import React from 'react'
import styles from 'components/loading/loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  )
}
