import { Link } from "react-router-dom"
import Cari from "../components/Cari"
import Button from "../elements/Button"
import Judul from "../elements/Judul"
import { Navbar } from "../components/Navbar"
import { useQuery } from "@apollo/client"
import { getPakar } from "../graphql/query"
import { useEffect, useState } from "react"

const Pakar = () => {
    const {data, loading, error} = useQuery(getPakar)
    const [pakar, setPakar] = useState([])
    useEffect(() => {
        if(!loading && !error){
            setPakar(data.pakar)
        }
    }, [loading])
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
                <Judul
                    text={'Pakar'}
                />
                <div style={{backgroundColor:'var(--secondary)'}} className="col-6 col-lg-3 ms-lg-5 pt-1 pb-1 ms-4 rounded">
                    <Cari
                        text={'Nama'}
                    />
                </div>

                <div className="mt-3 mb-3 col-11 m-auto">
                    <table className=" table table-secondary">
                        <thead>
                            <tr>
                                <th>ID Pakar</th>
                                <th>Nama</th>
                                <th>Jenis Kelamin</th>
                                <th>Telp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ?
                                <tr>
                                    <td>loading...</td>
                                </tr>
                                :
                                data?.pakar?.map((item, idx)=> 
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.jenKel}</td>
                                        <td>{item.telp}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Pakar