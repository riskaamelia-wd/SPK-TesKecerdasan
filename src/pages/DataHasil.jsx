import { Link } from "react-router-dom"
import Cari from "../components/Cari"
import Judul from "../elements/Judul"
import Button from "../elements/Button"
import { useQuery } from "@apollo/client"
import { getTes } from "../graphql/query"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"

export const DataHasil = () => {
    const {data, loading, error} = useQuery(getTes)
    const [tes, setTes] = useState([])
    useEffect(() => {
        if(!loading && !error){
            setTes(data.tes)
        }
    }, [loading])
    return(
        <>
            <Navbar
                text1={'Data Siswa'}
                text2={'Data Pakar'}
                text3={'Data Soal'}
                text4={'Data Hasil'}
                link1={'/dataSiswa'}
                link2={'/dataPakar'}
                link3={'/dataSoal'}
                link4={'/dataHasil'}
                linkMenu={'/menuAdmin'}
            />
            <div  style={{backgroundColor:'var(--primary)', height:'100vh'}}>
                <Judul
                    text={'Data Hasil'}
                />
                <div className="col-11 m-auto mt-5">
                    <Cari
                        text={'ID'}
                        classNameLabel={'text-white'}
                    />
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NIS</th>
                                <th>Tanggal Tes</th>
                                <th>Nama</th>
                                <th>Tipe Kecerdasan</th>
                                <th>Program Studi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {      
                                loading?
                                <tr>
                                    <td className='text-center' colspan='6'>loading....</td>
                                </tr>                  
                                :
                                data?
                                data?.tes?.map((item, idx) => 
                                    <tr key={idx}>
                                        <td>{item?.id}</td>
                                        <td>{item?.nis}</td>
                                        <td>{item?.nama}</td>
                                        <td>{item.tglTes}</td>
                                        <td>{item.tipeKecerdasan}</td>
                                        <td>{item.prodi}</td>
                                    </tr>
                                )
                                :
                                <tr>
                                    <td className='text-center' colspan='6'>kosong</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div className='d-flex justify-content-end gap-4 me-4 mt-4'>
                    <Button
                        text={'Report'}
                    />
                </div>
            </div>
        </>
    )
    }