import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Page } from './views/page'
import { PageInfo } from './views/page/type'

function App() {
  const countries: PageInfo.Country[] = [
    { name: 'Chrome' },
    { name: 'FireFox' },
    { name: 'Safari' },
    { name: 'Edge' },
    { name: 'Opera' }
  ]

  return (
    <div className='App'>
      <Page countries={countries} />
    </div>
  )
}

export default App
