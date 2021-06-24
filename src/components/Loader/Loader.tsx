import * as React from 'react'
import styles from './Loader.module.css'

type LoaderProps = {
  withDimmer?: boolean
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ withDimmer = false }, ref) => {
    const LoaderDiv = <div ref={ref} className={styles.loader} />
    if (withDimmer) {
      return (
        <div className="bg-gray-600 bg-opacity-90 fixed z-50 inset-0">
          {LoaderDiv}
        </div>
      )
    } else {
      return LoaderDiv
    }
  }
)

Loader.displayName = 'Loader'

export default Loader
