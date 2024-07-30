import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='CreaTuLanding-Linares/'
            element={<ItemListContainer />}
          ></Route>
          <Route
            path='CreaTuLanding-Linares/category/:cat'
            element={<ItemListContainer />}
          ></Route>
          <Route
            path='CreaTuLanding-Linares/detail/:id'
            element={<ItemDetailContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
