import { useSessionStorageValue } from '@react-hookz/web'
import gsap from 'gsap'
import { Fragment, useLayoutEffect, useMemo, useRef } from 'react'

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
  const { value: revealedIntro, set: setRevealedIntro } =
    useSessionStorageValue('revealed_intro', {
      defaultValue: false,
    })

  const ref = useRef()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialRevealedIntro = useMemo(() => revealedIntro, [])

  useLayoutEffect(() => {
    if (!initialRevealedIntro) {
      const ctx = gsap.context(() => {
        gsap.from(['#row-writer', '#row-developer', '#row-designer'], {
          delay: 1,
          ease: 'easeInOut',
          opacity: 0,
        })
        gsap.from('#row-writer', {
          delay: 1,
          ease: 'easeInOut',
          yoyoEase: 'none',
          duration: 4,
          yoyo: true,
          repeat: -1,
          xPercent: -50,
        })
        gsap.from('#row-developer', {
          delay: 1,
          ease: 'easeInOut',
          yoyoEase: 'none',
          duration: 5,
          repeat: -1,
          yoyo: true,
          xPercent: 50,
        })
        gsap.from('#row-designer', {
          delay: 1,
          ease: 'easeInOut',
          yoyoEase: 'none',
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          xPercent: -50,
        })

        gsap.to(['#row-writer', '#row-developer', '#row-designer'], {
          delay: 3.75,
          ease: 'easeInOut',
          opacity: 0.1,
          onComplete: () => setRevealedIntro(true),
        })
      }, ref)

      return () => ctx.revert()
    }
  }, [initialRevealedIntro, setRevealedIntro])

  return (
    <div
      ref={ref}
      className="w-screen h-screen absolute top-0 left-0 grid z-20 bg-white dark:bg-gray-1000 place-content-center overflow-hidden text-sans"
    >
      <div className="w-full h-full rotate-0 md:rotate-[-30deg]">
        {Object.keys(items).map((key) => (
          <div
            key={`row-${key}`}
            id={`row-${key}`}
            className="flex w-fit font-serif text-3xl md:text-6xl gap-5 items-center mb-5 md:mb-10"
          >
            {items[key].map((item, i) => (
              <Fragment key={item.name}>
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
