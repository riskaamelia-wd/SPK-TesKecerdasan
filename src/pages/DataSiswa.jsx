import { useQuery } from "@apollo/client"
import Cari from "../components/Cari"
import Judul from "../elements/Judul"
import { getSiswa } from "../graphql/query"
import { useEffect, useState } from "react"

export const DataSiswa = () => {
    const {data, loading, error} = useQuery(getSiswa)
    const [siswa, setSiswa] = useState([])
    useEffect(() => {
        if(!loading && !error){
            setSiswa(data.siswa)
        }
    }, [loading])
    return(
        <div style={{backgroundColor:'var(--primary)', height:'100vh'}}>
            <Judul className={'text-center pt-4 mb-5'} text={'Data Siswa'}/>
            <div className='col-5 pt-1 pb-1 pe-2 rounded ms-sm-5 col-lg-3' style={{backgroundColor:'var(--secondary)'}}>
                <Cari
                    text={'NIS'}
                />
            </div>
           <div className="col-11 m-auto mt-5">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NIS</th>
                            <th>Nama</th>
                            <th>Tanggal Lahir</th>
                            <th>No.Hp</th>
                            <th>Jenis Kelamin</th>
                            <th>Jurusan</th>
                            <th>Kelas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                        
                            data?.siswa?.map((item, idx) => 
                                <tr key={idx}>
                                    <td>{item?.id}</td>
                                    <td>{item?.nis}</td>
                                    <td>{item?.nama}</td>
                                    <td>{item.tglLahir}</td>
                                    <td>{item.noHp}</td>
                                    <td>{item.jenKel}</td>
                                    <td>{item.jurusan}</td>
                                    <td>{item.kelas}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}