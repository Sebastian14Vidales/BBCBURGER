'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme('dark')
  const [mounted, setMounted] = useState(false)
  console.log(resolvedTheme);
  
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray300 dark:hover:bg-gray700'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'light' ? (
        <MoonIcon className='h-5 w-5 text-oscuro' />
        ) : (
        <SunIcon className='h-5 w-5 text-snow' />
      )}
    </button>
  )
}

export default ThemeButton