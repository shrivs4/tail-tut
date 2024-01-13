import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <h1>This page cannot be found</h1>
      <h2>Please return to <Link href={'/'}>HomePage</Link></h2>
    </div>
  )
}
