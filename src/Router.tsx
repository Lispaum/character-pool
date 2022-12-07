import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
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
      </Route>
    </Routes>
  )
}
