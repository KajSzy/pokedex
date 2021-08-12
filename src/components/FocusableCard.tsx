import {
  FocusableProps,
  withFocusable,
} from '@noriginmedia/react-spatial-navigation'
import cn from 'classnames'
import * as React from 'react'

type FocusableCardProps = FocusableProps & {
  className?: string
  children: React.ReactNode
}

const checkIfElementIsVisible = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  )
}

const FocusableCard: React.FC<FocusableCardProps> = ({
  children,
  className,
  ...focusableProps
}) => {
  const nodeRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (nodeRef.current) {
      if (!checkIfElementIsVisible(nodeRef.current)) {
        nodeRef.current.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }
  }, [focusableProps.focused])

  return (
    <div
      ref={nodeRef}
      className={cn(
        'bg-gray-800 rounded-lg p-2 m-4 gray-900 active:bg-gray-600 border-2 ',
        {
          'border-green-700': focusableProps.focused,
        },
        {
          'border-transparent': !focusableProps.focused,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

FocusableCard.displayName = 'FocusableCard'

export default withFocusable()(FocusableCard)
