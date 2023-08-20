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
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import Siswa from './pages/Siswa';
import MenuAdmin from './pages/MenuAdmin';
import { DataSiswa } from './pages/DataSiswa';
import { DataHasil } from './pages/DataHasil';
import { DataSoal } from './pages/DataSoal';
import { DataPakar } from './pages/DataPakar';
import { Navbar } from './components/Navbar';
import { MenuUtama2 } from './pages/MenuUtama2';
import { MenuAdmin2 } from './pages/MenuAdmin2';
import { TiperKecerdasan } from './pages/TipeKecerdasan';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='menuUtama' element={<MenuUtama2/>}/>
          <Route path='pakar' element={<Pakar/>}/>
          <Route path='informasiKecerdasan' element={<InformasiKecerdasan/>}/>
          <Route path='hasilTes' element={<HasilTes/>}/>
          <Route path='tesKecerdasan' element={<TesKecerdasan/>}/>
          <Route path='siswa' element={<Siswa/>}/>
          <Route path='dataSiswa' element={<DataSiswa/>}/>
          <Route path='menuAdmin' element={<MenuAdmin2/>}/>
          <Route path='dataHasil' element={<DataHasil/>}/>
          <Route path='dataSoal' element={<DataSoal/>}/>
          <Route path='dataPakar' element={<DataPakar/>}/>
          <Route path='tipeKecerdasan' element={<TiperKecerdasan/>}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
