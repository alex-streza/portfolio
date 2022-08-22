import * as pkg from '@codesandbox/sandpack-react'
const {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} = pkg
import { useLocalStorageValue } from '@react-hookz/web'

const APP_CODE = `
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  return <>
    <h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </>
}
`.trim()

interface SandboxProps {
  showTabs?: boolean
  showExplorer?: boolean
  showLineNumbers?: boolean
  showNavigator?: boolean
}

const Sandbox = ({
  showTabs,
  showExplorer,
  showLineNumbers,
  showNavigator,
}: SandboxProps) => {
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
          '/test.js': {
            code: `const test = 2`,
          },
        },
      }}
    >
      <SandpackLayout className="my-10 !border-main">
        {showExplorer && <SandpackFileExplorer />}
        <SandpackCodeEditor
          showTabs={showTabs}
          showLineNumbers={showLineNumbers}
          closableTabs
        />
        <SandpackPreview showNavigator={showNavigator} />
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default Sandbox
