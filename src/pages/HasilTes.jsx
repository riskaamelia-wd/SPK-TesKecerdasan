import { Link } from "react-router-dom"
import Cari from "../components/Cari"
import Button from "../elements/Button"
import Judul from "../elements/Judul"
import { Navbar } from "../components/Navbar"

const HasilTes = () =>{
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
            <div style={{backgroundColor:'var(--primary)', height:'100vh'}}>
            <div>
                <Judul
                    text={'Hasil Tes'}
                />
                <div className=" pt-1 pb-1 col-6 col-lg-3 rounded ms-3 ms-lg-5" style={{backgroundColor:'var(--secondary)'}}>
                    <Cari
                        text={'ID'}
                    />
                </div>
                <div className="col-11 m-auto">
                    <table className="table mt-3">
                        <thead>
                            <tr>
                                <th>ID Siswa</th>
                                <th>Tanggal Tes</th>
                                <th>Nama</th>
                                <th>Tes Kecerdasan</th>
                                <th>Program Studi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>01 januari 1911</td>
                                <td>John</td>
                                <td>Linguistik</td>
                                <td>IPA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary me-4 me-lg-5" to={'/menuUtama'}>
                        Keluar
                    </Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default HasilTes