import { Link } from "react-router-dom"
import Button from "../elements/Button"
import Input from "../elements/Input"
import Judul from "../elements/Judul"
import { useQuery } from "@apollo/client"
import { getSoal } from "../graphql/query"
import { useEffect, useState } from "react"
import trash from '../assets/trash.svg'

export const DataSoal = () => {
    const {data, loading, error} = useQuery(getSoal)
    const [soal,setSoal] = useState([])
    const lastId = data?.soal[data?.soal.length - 1]?.id;
    useEffect(() => {
        console.log(data);
        if(!loading && !error){
            setSoal(data.siswa)
        }
    }, [loading])
    
    return(
        <div className=" pb-5" style={{backgroundColor:'var(--primary)', height:'fit-content'}}>
            <Judul
                text={'Data Soal'}
            />
            <div className="col-11 m-auto ">
                <div className="col-12 d-flex flex-row justify-content-between">
                    <div className="col-8 mb-3">
                        <div className="col-12 d-flex flex-row mb-3">
                            <label className="col-3 me-4 text-white">ID Soal</label>
                            {
                                <input 
                                    disabled 
                                    value={lastId + 1}
                                    className="form-control text-center" 
                                    style={{width:'4vw'}}
                                />
                            }
                        </div>
                        <Input
                            text={'Tipe Kecerdasan'}
                            className={'col-12'} 
                            classNameLabel={'me-4 col-3 text-white'}
                        />
                        <Input
                            text={'Soal'}   
                            className={'col-12'} 
                            classNameLabel={'me-4 col-3 text-white'}
                        />
                    </div>
                    <div className=" pb-3 col-1">
                        <div className="d-flex justify-content-end flex-column" style={{width:'fit-content'}}>
                            <Button
                                text={'Tambah'}
                            />
                            <Button
                                text={'Report'}
                                className={'mt-3'}
                            />
                            <Link to={'/menuAdmin'} className="mt-3 btn btn-primary">
                                Keluar
                            </Link>
                        </div>
                    </div>
                </div>
                <table className=" table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tipe Kecerdasan</th>
                            <th>Soal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading?
                            <tr>
                                <td colspan={'4'}>Loading...</td>
                            </tr>
                            :
                            data?.soal?.map((item, idx)=> 
                                <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.tipeKecerdasan}</td>
                                    <td>{item.soal}</td>
                                    <td>                                        
                                        <button className="bg-danger pb-2 m-0 rounded btn">
                                            <img src={trash} alt="delete"/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}