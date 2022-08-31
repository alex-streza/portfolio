import { Html, Scroll, ScrollControls } from '@react-three/drei'

import DesignProjectCard from '@components/cards/DesignProjectCard'
import Book from '@components/icons/Book'
import Mail from '@components/icons/Mail'
import {
  Adobeaftereffects,
  Blender,
  Dribbble,
  Figma,
  Github,
  Gumroad,
  Linkedin,
  Medium,
  Producthunt,
  Twitter,
} from '@icons-pack/react-simple-icons'
import { useMediaQuery } from '@react-hookz/web'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/alexandru-streza-7a4254155',
    icon: <Linkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/alex-streza',
    icon: <Github />,
    label: 'GitHub',
  },
  {
    href: 'https://medium.com/@alex.streza',
    icon: <Medium />,
    label: 'Medium',
  },
  {
    href: 'https://twitter.com/alex_streza',
    icon: <Twitter />,
    label: 'Twitter',
  },
]

const Content = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          ease: 'power3.easeInOut',
        })
        .to(contentRef.current, {
          opacity: 1,
          duration: 0,
        })
        .to('hr', {
          stagger: 0.2,
          width: '100%',
        })
        .from('h1 span span', {
          yPercent: isDesktop ? 125 : 130,
          stagger: 0.5,
          delay: 0.5,
        })
        .to('hr', {
          stagger: 0.2,
          width: 0,
        })
        .to('#mail', {
          delay: 0.2,
          opacity: 1,
        })
        .to('#resume', {
          opacity: 1,
        })
        .from('p', {
          opacity: 0,
        })
        .to('#designProjects', {
          opacity: 1,
        })
    }, contentRef)

    return () => ctx.revert()
  }, [isDesktop])

  return (
    <div ref={contentRef} className="flex flex-col pt-10 opacity-0">
      <h1 className="!text-5xl w-fit md:!text-8xl leading-[60px]">
        <span className="block overflow-hidden">
          <span className="block">Design</span>
          <hr className="mt-3 m-0 w-0" />
        </span>
        <span className="block overflow-hidden">
          <span className="block">Creative</span>
          <hr className="mt-3 m-0 w-0" />
        </span>
        <span className="block overflow-hidden">
          <span className="block">Experiences</span>
          <hr className="mt-3 m-0 w-0" />
        </span>
      </h1>
      <span id="mail" className="flex items-center gap-2 font-bold opacity-0">
        <Mail />
        alex.streza@snowfox.art
      </span>
      <a
        id="resume"
        className="flex gap-2 dark:!text-white w-fit !text-gray-1000 opacity-0 font-bold mt-3 mb-5 md:mb-10"
        href="https://drive.google.com/file/d/11u_cYddP19wu7aAZdYpePpj4MOSQWOAe/view"
        target="_blank"
        rel="noreferrer"
      >
        <Book /> Resume.pdf
      </a>
      <p className="mb-10 md:mb-20 font-normal text-xl md:text-2xl max-w-[60ch] md:leading-10">
        I’m a freelance designer & developer with
        <b className="font-serif">+3.5</b> years of experience in imagining and
        implementing solutions in various industries and fields ranging from AI,
        sport registrations, map-based visualizations to blockchain-powered
        platforms.
        <br />
        <br />
        Throghout my development career I discovered the significance of product
        research & design while I worked with global brands and unicorn
        start-ups. Design is <b className="font-serif">humane</b> and with that
        in mind I decided to pursue a polivalent career in building products
        from scratch or bring value to those who need it.
        <br />
        <br />
        In regards to interest, I <b className="font-serif">love</b> CGI/VFX, 3D
        Creative Experiences which is largely controversial considering my
        cybersecurity & informatics academic background.
        <br />
        <br />I seek to bridge the gap between{' '}
        <b className="font-serif">impossible</b> design and bland, dreadful
        interfaces by bringing vast expertise in what can be done from a
        development standpoint and what needs to be done from a UX perspective.
      </p>
      <div id="designProjects" className="flex flex-wrap gap-8 w-fit opacity-0">
        <DesignProjectCard
          title="Snow Fox - Design System"
          description="Building an entire Design System from scratch is a huge undertaking. I undertook this project to build a system that I could use for my own personal projects and released it to the Figma community."
          image="/assets/images/snow-fox-design-system/0.png"
          link="https://www.figma.com/community/file/1120750897470911763"
        >
          <a href="https://www.figma.com" aria-label="figma">
            <Figma color="#F24E1E" size={40} />
          </a>
          <a href="https://www.producthunt.com" aria-label="product hunt">
            <Producthunt color="#DA552F" size={40} />
          </a>
        </DesignProjectCard>
        <DesignProjectCard
          title="3D Resources"
          description="Looking to create great 3D experiences? Then you need 3D Resources! This collection of resources is perfect for creative developers & artists who want to push the boundaries of what's possible."
          image="/assets/images/3d-resources/1.png"
          link="https://3d-resources.co"
        >
          <a href="https://www.blender.org" aria-label="figma">
            <Figma color="#F24E1E" size={40} />
          </a>
          <a href="https://www.producthunt.com" aria-label="product hunt">
            <Producthunt color="#DA552F" size={40} />
          </a>
          <a href="https://gumroad.com" aria-label="gumroad">
            <Gumroad color="#36A9AE" size={40} />
          </a>
        </DesignProjectCard>
        <DesignProjectCard
          title="Genidea"
          description="For my Master's Degree project I designed & developed an app that generates app ideas with OpenAI and allows collecting them as NFTs."
          image="/assets/images/genidea/1.png"
          link="http://devnet.genidea.app/"
        >
          <a href="https://www.figma.com" aria-label="figma">
            <Figma color="#F24E1E" size={40} />
          </a>
          <a href="https://www.blender.org" aria-label="blender">
            <Blender color="#F5792A" size={40} />
          </a>
          <a href="https://www.lottiefiles.com" aria-label="lottie">
            <Adobeaftereffects color="#9999FF" size={40} />
          </a>
          <a href="https://dribbble.com" aria-label="dribbble">
            <Dribbble color="#EA4C89" size={40} />
          </a>
        </DesignProjectCard>
        <DesignProjectCard
          title="Portfolio"
          description="Portfolio websites need to be outstanding as much as the projects showcased. Building a 3D interactive experience to present my expertise in a glamorous way."
          image="/assets/images/portfolio/0.png"
        >
          <a href="https://www.figma.com" aria-label="figma">
            <Figma color="#F24E1E" size={40} />
          </a>
          <a href="https://www.blender.org" aria-label="blender">
            <Blender color="#F5792A" size={40} />
          </a>
          <a href="https://dribbble.com" aria-label="dribbble">
            <Dribbble color="#EA4C89" size={40} />
          </a>
        </DesignProjectCard>
      </div>
      <h2 className="mt-20 mb-2 !font-serif !text-5xl">Get in touch</h2>
      <span>Available for remote offers</span>
      <span className="mt-8 flex gap-2 items-center font-bold">
        <Mail />
        alex.streza@snowfox.art
      </span>
      <a
        className="flex gap-2 dark:!text-white !text-gray-1000 w-fit font-bold mt-5 mb-3"
        href="https://drive.google.com/file/d/11u_cYddP19wu7aAZdYpePpj4MOSQWOAe/view"
        target="_blank"
        rel="noreferrer"
      >
        <Book /> Resume.pdf
      </a>
      <div className="grid gap-5 grid-cols-2 mb-32 md:mb-40 mt-8 w-fit">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            className="flex gap-2 dark:!text-white !text-gray-1000 font-semibold"
            href={href}
          >
            {icon} {label}
          </a>
        ))}
      </div>
    </div>
  )
}

const HTML = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { width, height } = useThree((state) => state.viewport)

  return (
    <group
      position={[
        -width / 2 + (isDesktop ? 1 : 0),
        -height / 2 + (isDesktop ? 2 : 3),
        0,
      ]}
    >
      <ScrollControls horizontal damping={10}>
        <Scroll>
          <Html
            className="h-full w-full px-5 md:px-32 pt-0"
            wrapperClass="!top-20 md:!top-28 !left-0 !transform-none w-screen h-screen overflow-y-auto"
          >
            <Content />
          </Html>
        </Scroll>
      </ScrollControls>
    </group>
  )
}

export default HTML
