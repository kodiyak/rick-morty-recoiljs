import React from 'react'
import Link from 'next/link'

interface AppLinkProps {
  href: string
}

const AppLink: React.FC<AppLinkProps> = ({ href, children }) => {
  return (
    <Link prefetch={false} href={href} passHref>
      <a>{children}</a>
    </Link>
  )
}

export default AppLink
