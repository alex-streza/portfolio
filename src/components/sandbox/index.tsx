import * as pkg from '@codesandbox/sandpack-react'
import {
  SandpackFiles,
  SandpackPredefinedTemplate,
  SandpackSetup,
} from '@codesandbox/sandpack-react'
import { CodeMirrorRef } from '@codesandbox/sandpack-react/dist/types/components/CodeEditor/CodeMirror'
const {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} = pkg
import { useLocalStorageValue } from '@react-hookz/web'
import { useRef } from 'react'
import Prettier from './Prettier'

interface SandboxProps {
  showTabs?: boolean
  showExplorer?: boolean
  showLineNumbers?: boolean
  showNavigator?: boolean
  showPreview?: boolean
  template?: SandpackPredefinedTemplate
  setup?: SandpackSetup | any
  files?: SandpackFiles
}

const Sandbox = ({
  showTabs,
  showExplorer,
  showLineNumbers,
  showNavigator,
  showPreview = true,
  template,
  files = {},
  setup = {},
}: SandboxProps) => {
  const codemirrorInstance = useRef<CodeMirrorRef>()

  const [theme] = useLocalStorageValue('theme', 'light')

  return (
    <SandpackProvider
      theme={theme && theme.includes('dark') ? 'dark' : 'light'}
      template={template}
      customSetup={setup}
      files={files}
    >
      <SandpackLayout className="my-10 !border-main">
        {showExplorer && <SandpackFileExplorer />}
        <SandpackCodeEditor
          ref={codemirrorInstance}
          showTabs={showTabs}
          showLineNumbers={showLineNumbers}
          closableTabs
        />
        {showPreview && <SandpackPreview showNavigator={showNavigator} />}
        <Prettier ref={codemirrorInstance} />
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default Sandbox
