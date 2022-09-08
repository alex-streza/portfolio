import ArrowLeft from '@components/icons/ArrowLeft'
import Character from '@components/icons/Character'
import Refresh from '@components/icons/Refresh'
import Timer from '@components/icons/Timer'
import { useIntervalEffect } from '@react-hookz/web'
import { useCallback, useEffect, useState, useTransition } from 'react'

const config = {
  time: [15, 30, 60],
  words: ['SM', 'MD', 'LG'],
}

const wordsCount = {
  SM: 10,
  MD: 20,
  LG: 30,
}

const rawText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis consectetur ac turpis ultrices sit pharetra. Blandit vulputate cursus proin leo, etiam quis. Quisque tincidunt pellentesque orci varius ac ut. Porttitor volutpat praesent faucibus consequat.'
const defaultText = [...rawText.split(' ').join('␣')].map((c) => ({
  character: c,
  isCorrect: false,
  isError: false,
}))

const KeyboardTrainer = ({ onBack }: { onBack: () => void }) => {
  const [type, setType] = useState<'words' | 'time'>('time')
  const [typeIndex, setTypeIndex] = useState(0)
  const [text, setText] = useState([...defaultText])
  const [started, setStarted] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [loading, setLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)

  const handleInitializeSentence = useCallback(() => {
    setLoading(true)
    fetch(
      `https://random-word-api.herokuapp.com/word?number=${
        type === 'words' ? wordsCount[config.words[typeIndex]] : '20'
      }`,
    )
      .then((res) => res.json())
      .then((res) => {
        const words = [...res.join('␣')].map((word) => ({
          character: word,
          isCorrect: false,
          isError: false,
        }))
        setText(words)
      })
      .finally(() => {
        setLoading(false)
        setStarted(false)
        setShowStats(false)
        setTimeLeft(config.time[0])
      })
  }, [type, typeIndex])

  useEffect(() => {
    if (!showStats) handleInitializeSentence()
  }, [handleInitializeSentence, showStats, type, typeIndex])

  const handleKeyDown = useCallback(
    (e) => {
      if (!showStats) {
        let { key } = e
        const isLetter = key.toLowerCase() >= 'a' && key.toLowerCase() <= 'z'
        key = key === ' ' ? '␣' : key

        if (isLetter || key === '␣') {
          if (!started) setTimeLeft(config.time[typeIndex])
          setStarted(true)

          const newText = [...text]

          for (let i = 0; i < newText.length; i++) {
            const { character, isCorrect, isError } = newText[i]

            if (!isCorrect && !isError) {
              newText[i].isCorrect =
                character.toLowerCase() === key.toLowerCase()
              newText[i].isError = character.toLowerCase() !== key.toLowerCase()
              break
            }
          }
          setText(newText)
        }
      }
    },
    [showStats, started, typeIndex, text],
  )

  useIntervalEffect(() => {
    if (timeLeft - 1 > 0) {
      setTimeLeft(timeLeft - 1)
    } else if (started) {
      setStarted(false)
      setShowStats(true)
    }
  }, 1000)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [text, handleKeyDown])

  return (
    <div className="absolute top-16 md:top-28 left-0 w-screen z-10 grid place-content-center rounded">
      <div className="p-5 max-w-[530px] dark:bg-gray-hex dark:bg-opacity-20 bg-white bg-opacity-50">
        <button
          className="font-semibold flex gap-1 items-center w-fit p-2 pl-0 mb-4 reset-link dark:!text-white !text-gray-1000"
          onClick={onBack}
        >
          <ArrowLeft />
          <span className="-mt-1 block">Back to projects</span>
        </button>
        <h1 className="!mb-5">Keyboard Trainer</h1>
        <div className="flex mb-2 dark:bg-gray-900 bg-light-gray-600 px-5 py-2 justify-between">
          <div className="flex gap-5 items-center">
            <button
              className={`flex cursor-pointer font-bold gap-1 text-gray-100 ${
                type === 'time' ? '!text-main' : ''
              }`}
              onClick={() => {
                setType('time')
                setTypeIndex(0)
              }}
            >
              <Timer />
              Time
            </button>
            <button
              className={`flex cursor-pointer font-bold gap-1 text-gray-100 ${
                type === 'words' ? '!text-main' : ''
              }`}
              onClick={() => {
                setType('words')
                setTypeIndex(0)
              }}
            >
              <Character />
              Words
            </button>
          </div>
          <div className="flex gap-5 items-center">
            {config[type].map((w, i) => (
              <button
                className={`flex cursor-pointer font-bold gap-1 text-gray-100 ${
                  typeIndex === i ? '!text-main' : ''
                }`}
                key={w}
                onClick={() => setTypeIndex(i)}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-5 items-center justify-center">
          <span className="mb-2 block font-extrabold text-2xl">
            {loading && 'Loading'}
            {!loading && !started && !showStats && 'Start typing...'}
            {started && timeLeft}
          </span>
          {showStats && (
            <>
              <span className="mb-2 block font-extrabold text-2xl">
                {(
                  (text.filter((c) => c.isCorrect).length / 3.5) *
                  (60 / config.time[typeIndex])
                ).toFixed(0)}{' '}
                WPM
              </span>
              <span className="mb-2 block font-extrabold text-2xl">
                {(
                  (text.filter((c) => c.isCorrect).length /
                    text.filter((c) => c.isCorrect || c.isError).length) *
                  100
                ).toFixed(0)}{' '}
                % ACC
              </span>
            </>
          )}
        </div>
        <div className="mb-5 leading-8 text-lg tracking-widest break-all font-semibold">
          {text.map((t, i) => (
            <span
              key={t.character + '' + i}
              className={`${
                t.isCorrect ? 'text-main' : t.isError ? 'text-red' : ''
              }`}
            >
              {t.character}
            </span>
          ))}
        </div>
        <button
          className="flex items-center justify-center w-full cursor-pointer font-bold dark:text-gray-100 text-gray-1000"
          onClick={handleInitializeSentence}
        >
          <Refresh />
        </button>
      </div>
    </div>
  )
}

export default KeyboardTrainer
