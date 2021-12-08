import { motion } from 'framer-motion'
import React from 'react'

interface PageTitleProps {
  title?: string
  description?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <section className="w-full h-96 relative">
      <div className="w-full h-full absolute flex items-center justify-center select-none flex-col">
        <motion.h1
          className="text-5xl font-bold"
          initial="initial"
          animate="animate"
          key={title}
          variants={{
            initial: {
              animationDelay: '2s',
              y: 30,
              opacity: 0
            },
            animate: {
              y: 0,
              opacity: 1
            }
          }}
        >
          {title}
        </motion.h1>
        <motion.h1
          className="text-lg font-bold"
          initial="initial"
          animate="animate"
          key={description}
          variants={{
            initial: {
              y: 30,
              opacity: 0
            },
            animate: {
              y: 0,
              opacity: 1
            }
          }}
        >
          {description}
        </motion.h1>
      </div>
    </section>
  )
}

export default PageTitle
