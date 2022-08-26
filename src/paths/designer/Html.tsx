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

const socialLinks = [
  {
    href: 'https://www.producthunt.com/posts/3d-resources',
    icon: <Linkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.producthunt.com/posts/3d-resources',
    icon: <Github />,
    label: 'GitHub',
  },
  {
    href: 'https://www.producthunt.com/posts/3d-resources',
    icon: <Medium />,
    label: 'Medium',
  },
  {
    href: 'https://www.producthunt.com/posts/3d-resources',
    icon: <Twitter />,
    label: 'Twitter',
  },
]

const Content = () => {
  return (
    <div className="flex flex-col pt-10">
      <h1 className="text-5xl md:text-8xl leading-[60px]">
        Design <br /> Creative
        <br /> Experiences
      </h1>
      <span className="flex items-center gap-2 font-bold">
        <Mail />
        alex.streza@snowfox.art
      </span>
      <a
        className="flex gap-2 dark:!text-white w-fit !text-gray-1000 font-bold mt-3 mb-10 md:mb-20"
        href="https://drive.google.com/file/d/11u_cYddP19wu7aAZdYpePpj4MOSQWOAe/view"
        target="_blank"
        rel="noreferrer"
      >
        <Book /> Resume.pdf
      </a>
      <div className="flex flex-wrap gap-8 w-fit">
        <DesignProjectCard
          title="Snow Fox - Design System"
          description="Searching for a design system that will help you create beautiful, consistent user interfaces across all your digital products?  So why wait? Get started today with Snow Fox!"
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
          description="Looking to create great 3D experiences? Then you need 3D Resources! This collection of resources is perfect for creative developers & artists who want to push the boundaries of what's possible. High-quality assets and tools, to create beautiful visuals 😍."
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
          description="Get inspired on the go with ideas in diverse tech related fields with artificial intelligence. Users can generate app ideas with OpenAI and collect them as NFTs."
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
      <h2 className="mt-20 mb-8 !font-serif !text-5xl">Get in touch</h2>
      <span className="flex gap-2 items-center font-bold">
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
      <span>Available for freelance work</span>
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
