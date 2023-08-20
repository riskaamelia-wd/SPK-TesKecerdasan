import { useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const TiperKecerdasan = () => {
    const location = useLocation()
    return(
        <>
            <Navbar                
                text1={'Siswa'}
                text2={'Pakar'}
                text3={'Informasi Kecerdasan'}
                text4={'Tes Kecerdasan'}
                text5={'Hasil Tes'}
                linkMenu={'/menuUtama'}
                link1={'/siswa'}
                link2={'/pakar'}
                link3={'/informasiKecerdasan'}
                link4={'/tesKecerdasan'}
                link5={'/hasilTes'}
            />
            <div className="text-center" style={{backgroundColor:'var(--primary)', height:'100vh', paddingTop:'25vh'}}>
                <apan className="text-white">NIS : {location.state.nis}</apan>
                <h4 className="text-white">{location.state.nama}</h4>
                <h1 className="text-white">{location.state.tipeKecerdasan}</h1>
                <p className="text-white">Tanggal Tes : {location.state.tglTes}</p>
            </div>
        </>
    )
}