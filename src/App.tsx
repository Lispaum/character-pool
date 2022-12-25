import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global/global'
import { darkTheme, lightTheme } from './styles/themes/default'

interface ThemeSchema {
  themeName: string
  backgroundColor: string
  textColor: string
  'fill-A': string
  'fill-B': string
  headerColor: string
}

interface GlobalContextType {
  toggleTheme: () => void
}

export const GlobalContext = createContext({} as GlobalContextType)

export function App() {
  const [theme, setTheme] = useState(lightTheme)

  function toggleTheme() {
    const newTheme = theme.themeName === 'darkTheme' ? lightTheme : darkTheme
    console.log(
      'currentTheme:',
      theme.themeName,
      'newTheme:',
      newTheme.themeName,
    )
    setTheme(newTheme)
  }

  return (
    <GlobalContext.Provider value={{ toggleTheme }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}
