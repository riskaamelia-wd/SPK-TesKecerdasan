import { Link, useNavigate } from "react-router-dom"
import Button from "../elements/Button"


const MenuUtama = () => {
    const navigate = useNavigate()
    return(
        <div  style={{backgroundColor:'var(--primary)', height:'100vh', paddingTop:'120px'}} className="pb-5">
            <h2 className="mb-4 text-center text-white pt-4">Menu Utama</h2>
            <div  style={{backgroundColor:'var(--secondary)'}} className="d-flex flex-column col-md-3 col-6 mx-auto p-4 rounded">
                <Link to={'/dataSiswa'} className="mb-3 btn btn-primary">Siswa</Link>
                <Link to={'/pakar'} className="mb-3 btn btn-primary">Pakar</Link>
                <Link to={'/informasiKecerdasan'} className="mb-3 btn btn-primary">Informasi Kecerdasan</Link>
                <Link to={'/tesKecerdasan'} className="mb-3 btn btn-primary">Tes Kecerdasan</Link>
                <Link to={'/hasilTes'} className=" btn btn-primary">Hasil Tes</Link>
            </div>
        </div>
    )
}

export default MenuUtama