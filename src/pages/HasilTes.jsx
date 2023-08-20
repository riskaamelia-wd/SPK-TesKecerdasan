import { Link } from "react-router-dom"
import Cari from "../components/Cari"
import Button from "../elements/Button"
import Judul from "../elements/Judul"
import { Navbar } from "../components/Navbar"
import { useQuery } from "@apollo/client"
import { getTes } from "../graphql/query"
import { useEffect, useState } from "react"

const HasilTes = () =>{
    // const {data, loading, error} = useQuery(getTes)
    const [searchText, setSearch] = useState('')
    const {data, loading, error, refetch} = useQuery(getTes,{
        variables:{nama: `%${searchText}%`}
    })
    const [hasil, setHasil] = useState([])
    useEffect(() => {
        if(!loading && !error){
            setHasil(data?.tes)
        }
    },[loading])
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
                {/* <div className=" pt-1 pb-1 col-6 col-lg-3 rounded ms-3 ms-lg-5" style={{backgroundColor:'var(--secondary)'}}>
                    <Cari
                        text={'ID'}
                    />
                </div> */}
                <div className="col-11 m-auto">                    
                    <Cari
                        classNameLabel={'text-white'}
                        type={'text'}
                        text={'Nama'}
                        name={'searchNis'}
                        htmlFor={'nama'}
                        value={searchText}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
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
                            {
                                loading?
                                <tr>
                                    <td className="text-center" colSpan={'5'}>Loading...</td>
                                </tr>
                                :
                                data?.tes?.map((item)=>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.tglTes}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.tipeKecerdasan}</td>
                                        <td>{item.siswa.jurusan}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </>
    )
}

export default HasilTes