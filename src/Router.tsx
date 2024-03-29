import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { GameTools } from './pages/GameTools'
import { Guide } from './pages/Guide'
import { Home } from './pages/Home'
import { NewSheet } from './pages/NewSheet'
import { Sheets } from './pages/Sheets'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/new-sheet" element={<NewSheet />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/game-tools" element={<GameTools />} />
      </Route>
    </Routes>
  )
}
