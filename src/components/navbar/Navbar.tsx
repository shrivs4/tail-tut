import Link from 'next/link'
import React from 'react'
import Links from './links/Links'

export default function Navbar() {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Links/>
      </div>
    </div>
  )
}
