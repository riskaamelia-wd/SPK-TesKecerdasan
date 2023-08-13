import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import MenuUtama from './pages/MenuUtama'
import Pakar from './pages/Pakar'
import InformasiKecerdasan from './pages/InformasiKecerdasan'
import TesKecerdasan from './pages/TesKecerdasan'
import './App.css'
import HasilTes from './pages/HasilTes'
import DataSiswa from './pages/DataSiswa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='menuUtama' element={<MenuUtama/>}/>
          <Route path='pakar' element={<Pakar/>}/>
          <Route path='informasiKecerdasan' element={<InformasiKecerdasan/>}/>
          <Route path='hasilTes' element={<HasilTes/>}/>
          <Route path='tesKecerdasan' element={<TesKecerdasan/>}/>
          <Route path='dataSiswa' element={<DataSiswa/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
