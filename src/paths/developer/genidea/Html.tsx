import Button from '@components/button/Button'
import { Html } from '@react-three/drei'

import BrowserIcon from '@components/icons/Browser'
import {
  Nextdotjs,
  Openai,
  ReactJs,
  Supabase,
} from '@icons-pack/react-simple-icons'

const HTML = () => {
  return (
    <Html className="w-screen h-screen p-0 md:px-32 mt-20 md:mt-60" center>
      <div className="p-5 dark:bg-[#000000] dark:bg-opacity-20 bg-none backdrop-blur-sm">
        <div className="flex mb-5 md:mb-8 gap-5">
          <ReactJs color="#61DAFB" size={40} />
          <Nextdotjs color="#ffffff" size={40} />
          <Supabase color="#3ecf8e" size={40} />
          <Openai color="#ffffff" size={40} />
          {/* <Open */}
        </div>
        <h1 className="text-5xl">GenIdea</h1>
        <p className="max-w-[65ch]">
          Get inspigreen on the go with ideas in diverse tech related fields
          with artificial intelligence. Users can generate app ideas with OpenAI
          and collect them as NFTs.
        </p>
        <Button>
          <BrowserIcon />
          <a
            href="http://devnet.genidea.app/"
            className="reset-link !text-gray-1000"
          >
            Check out
          </a>
        </Button>
      </div>
    </Html>
  )
}

export default HTML
