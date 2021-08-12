import { FocusableCard, TestContent } from '@components'
import {
  FocusableProps,
  withFocusable,
} from '@noriginmedia/react-spatial-navigation'
import cn from 'classnames'
import Head from 'next/head'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type Bookmark = {
  label: string
  id: string
}

const contentParser = (el: HTMLElement): Bookmark[] => {
  const headers: Bookmark[] = []
  el.querySelectorAll('h1').forEach((h) => {
    const uniqueId = generateID()
    h.setAttribute('anchor-id', uniqueId)
    headers.push({
      label: h.innerText,
      id: uniqueId,
    })
  })
  return headers
}

function generateID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

function Post(props: FocusableProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [currentBookmark, setCurrentBookmark] = useState<Bookmark | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const isBookmarkActive = useCallback(
    (bookmark: Bookmark) => currentBookmark.id === bookmark.id,
    [currentBookmark]
  )

  useEffect(() => {
    if (contentRef.current) {
      const items = contentParser(contentRef.current)
      setBookmarks(items)
      setCurrentBookmark(items[0])
      props.setFocus(items[0].id)
    }
  }, [])

  const handleBookmarkEnter = (...args) => {
    // eslint-disable-next-line no-console
    console.log(args)
  }

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <div className="container px-5 py-12 mx-auto flex justify-center">
        <div className="mr-auto sticky self-start top-0">
          {/* TABLE OF CONTENT */}
          {bookmarks.map((b) => (
            <FocusableCard
              focusKey={b.id}
              className={cn({
                'text-green-500': isBookmarkActive(b),
              })}
              key={b.id}
              onEnterPress={handleBookmarkEnter}
            >
              {b.label}
            </FocusableCard>
          ))}
        </div>
        <TestContent ref={contentRef} />
      </div>
    </>
  )
}

export default withFocusable({ trackChildren: true })(Post)
