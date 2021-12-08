import React from 'react'

interface PageTitleProps {
  title?: string
  description?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <section className="w-full h-96 relative">
      <div className="w-full h-full absolute flex items-center justify-center select-none flex-col">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h1 className="text-lg font-bold">{description}</h1>
      </div>
    </section>
  )
}

export default PageTitle
