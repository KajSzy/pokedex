import * as React from 'react'
import styles from './Loader.module.css'

const Loader = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className={styles.loader} />
})

Loader.displayName = 'Loader'

export default Loader
