import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import { useLocalStorageValue } from '@react-hookz/web'

const APP_CODE = `
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  return <>
    <h1>Hello world!</h1>
    <h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </>
}
`.trim()

const Sandbox = () => {
  const [theme] = useLocalStorageValue('theme', 'light')

  return (
    <SandpackProvider
      theme={theme && theme.includes('dark') ? 'dark' : 'light'}
      template="react"
      customSetup={{
        dependencies: {},
        files: {
          '/App.js': {
            code: APP_CODE,
          },
        },
      }}
    >
      <SandpackLayout className="my-10 !border-main">
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default Sandbox
