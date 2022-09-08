import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Page } from './views/page'
import { PageInfo } from './views/page/type'
import { Mode } from './hooks/useTheme'
import { ThemeContext } from 'styled-components'

function App() {
  const countries: PageInfo.Country[] = [
    { name: 'Chrome' },
    { name: 'FireFox' },
    { name: 'Safari' },
    { name: 'Edge' },
    { name: 'Opera' }
  ]

  // same as before
  const [mode, setMode] = useState<Mode>('light')

  useEffect(() => {
    document.querySelector('body')?.setAttribute('theme', mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode }}>
      <div className='App'>
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>Toggle theme</button>
        // the rest is the same as before
        <Page countries={countries} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
