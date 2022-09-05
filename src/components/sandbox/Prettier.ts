import * as pkg from '@codesandbox/sandpack-react'
import { CodeMirrorRef } from '@codesandbox/sandpack-react/dist/types/components/CodeEditor/CodeMirror'
import prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'
import { useCallback, useEffect, forwardRef, useState, Ref } from 'react'

const { useSandpack, useActiveCode } = pkg

const Prettier = forwardRef<CodeMirrorRef | any, {}>(
  (props, codemirrorInstance: any) => {
    const [prettierCode, setPrettierCode] = useState('')
    const { sandpack } = useSandpack()
    const activeCode = useActiveCode()

    const runPrettier = useCallback(() => {
      if (activeCode.code) {
        try {
          /**
           * I would recomend to run this process in a Worker
           */
          const formatted = prettier.format(activeCode.code, {
            parser: 'babel',
            plugins: [parserBabel],
          })

          setPrettierCode(formatted)
        } catch {}
      }
    }, [activeCode.code])

    useEffect(() => {
      const debounce = setTimeout(runPrettier, 1000)
      return () => {
        clearInterval(debounce)
      }
    }, [runPrettier])

    useEffect(() => {
      if (prettierCode) {
        const cmInstance = codemirrorInstance.current.getCodemirror()

        if (cmInstance) {
          const trans = cmInstance.state.update({
            selection: cmInstance.state.selection,
            changes: {
              from: 0,
              to: cmInstance.state.doc.length,
              insert: prettierCode,
            },
          })

          cmInstance.update([trans])
        }

        sandpack.updateFile(sandpack.activeFile, prettierCode)

        setPrettierCode(null)
      }
    }, [codemirrorInstance, prettierCode, sandpack])

    return null
  },
)

Prettier.displayName = 'Prettier'

export default Prettier
