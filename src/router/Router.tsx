import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from 'modules/Home'

const NotFound = lazy(() => import('pages/NotFound'))

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='*' element={<Navigate to='/404' />} />
      <Route path='/404' element={<NotFound />} />
    </Routes>
  )
}
