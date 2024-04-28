import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"

import Favorites from './layout/Favorites'
import Home from './layout/Home'
import NotFound from './layout/NotFound'

const PHOTO_URL = '/photos.json'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/favoritos'
          element={<Favorites />}
        />
        <Route
          path='/NotFound'
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}
export default App
