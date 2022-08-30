import { useLocalStorageValue } from '@react-hookz/web'
import gsap from 'gsap'
import { Fragment, useLayoutEffect, useRef, useState } from 'react'

const items = {
  writer: [
    {
      name: 'HashNode',
    },
    {
      name: 'Medium',
    },
    {
      name: 'Jasper.AI',
    },
    {
      name: 'Need a writer?',
      className: 'text-yellow',
    },
    {
      name: 'Twitter',
    },
    {
      name: 'Product Hunt',
    },
    {
      name: 'Gumroad',
    },
  ],
  developer: [
    {
      name: 'Postgres',
    },
    {
      name: 'ReactJS',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'Need a developer?',
      className: 'text-green w-[300px] md:w-[550px]',
    },
    {
      name: 'Next.JS',
    },
    {
      name: 'Tailwind CSS',
    },
    {
      name: 'ExpressJS',
    },
  ],
  designer: [
    {
      name: 'Vectary',
    },
    {
      name: '3D Scanning',
    },
    {
      name: 'Figma',
    },
    {
      name: 'Need a designer?',
      className: 'text-purple',
    },
    {
      name: 'Blender',
    },
    {
      name: 'Framer',
    },
    {
      name: 'Animations',
    },
  ],
}

const Intro = () => {
  const [revealedIntro, setRevealedIntro] = useLocalStorageValue(
    'revealed_intro',
    false,
  )
  const ref = useRef()

  useLayoutEffect(() => {
    if (!revealedIntro) {
      const ctx = gsap.context(() => {
        gsap.from(['#writer', '#developer', '#designer'], {
          delay: 1,
          ease: 'easeInOut',
          opacity: 0,
        })
        gsap.from('#writer', {
          delay: 1,
          ease: 'easeInOut',
          yoyoEase: 'none',
          duration: 4,
          yoyo: true,
          repeat: -1,
          xPercent: -50,
        })
        gsap.from('#developer', {
          delay: 1,
          ease: 'easeInOut',
          yoyoEase: 'none',
          duration: 5,
          repeat: -1,
          yoyo: true,
          xPercent: 50,
        })
        gsap.from('#designer', {
          delay: 1,
          ease: 'easeInOut',
          yoyoEase: 'none',
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          xPercent: -50,
        })

        gsap.to(['#writer', '#developer', '#designer'], {
          delay: 3.75,
          ease: 'easeInOut',
          opacity: 0.1,
          // onComplete: () => setRevealedIntro(true),
        })
        // gsap.to(ref.current, {
        //   delay: 4.5,
        //   display: 'none',
        //   // onComplete: () => setRevealedIntro(true),
        // })
      }, ref)

      return () => ctx.revert()
    }
  }, [revealedIntro, setRevealedIntro])

  return (
    <div
      ref={ref}
      className="w-screen h-screen absolute top-0 left-0 grid z-20 bg-white dark:bg-gray-1000 place-content-center overflow-hidden text-sans"
    >
      <div className="w-full h-full rotate-0 md:rotate-[-30deg]">
        {Object.keys(items).map((key) => (
          <div
            key={key}
            id={key}
            className="flex w-fit font-serif text-3xl md:text-6xl gap-5 items-center mb-5 md:mb-10"
          >
            {items[key].map((item, i) => (
              <Fragment key={key}>
                <span
                  className={`${
                    item.className ??
                    'dark:text-white text-gray-dark opacity-90'
                  } block w-fit hover:font-sans hover:italic`}
                >
                  {item.name}
                </span>
                {i < items[key].length - 1 && (
                  <span className="w-8 h-8 rounded-full bg-gray-100" />
                )}
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Intro
