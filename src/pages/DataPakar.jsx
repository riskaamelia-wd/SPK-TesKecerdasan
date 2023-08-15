import { useMutation, useQuery } from "@apollo/client";
import Judul from "../elements/Judul"
import { useEffect, useState } from "react";
import { getPakar } from "../graphql/query";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import Cari from "../components/Cari";
import pencil from '../assets/pensil.svg'
import trash from '../assets/trash.svg'
import { addPakar, deletePakar } from "../graphql/mutation";

export const DataPakar = () => {
    const {data, loading, error} = useQuery(getPakar)
    const [pakar,setPakar] = useState([])
    const [dataPakar,setDataPakar] = useState({
        nama : '',
        jenKel: '',
        telp: ''
    })
    const lastId = data?.pakar[data?.pakar.length - 1]?.id;
    useEffect(() => {
        if(!loading && !error){
            setPakar(data.pakar)
            console.log(data?.pakar)
        }
    }, [loading])

    const [ADD_PAKAR] = useMutation(addPakar,{
        refetchQueries:[getPakar]
    })
    const [DELETE_PAKAR] = useMutation(deletePakar,{
        refetchQueries:[getPakar]
    })

    const handleSubmit = async (e)  => {
        e.preventDefault()
        if(nama !== '' && telp !== '' && jenKel !== ''){
            await ADD_PAKAR({
                variables:{
                    object : {
                        nama : dataPakar.nama,
                        jenKel : dataPakar.jenKel,
                        telp : dataPakar.telp
                    }
                }
            })
        }
        alert("Data added successfully");
        setDataPakar({
            nama : '',
            jenKel: '',
            telp: ''
        })
        window.location.reload()
    }

    const handleDelete = async (item) => {
        console.log(item);
        try {
            await DELETE_PAKAR({
                variables: {
                    id: item
                }
            });
            alert("Item deleted successfully");
            window.location.reload()
        } catch (error) {
            alert("Error deleting item:", error);
        }
    }

    return(
        <div className="pb-5" style={{backgroundColor:'var(--primary)', height:'fit-content'}}>
            <Judul
                text={'Data Pakar'}
            />
            <div className="col-11 m-auto">
                <div className="col-12 ">
                    <form className="col-12  d-flex flex-row justify-content-between" onSubmit={handleSubmit}>
                        <div className="col-6">  
                            <div className="col-12 d-flex flex-row mb-3">
                                <label className=" me-5 text-white col-2">ID Pakar</label>
                                {
                                    <input 
                                        disabled 
                                        value={lastId + 1}
                                        className="form-control text-center" 
                                        style={{width:'5vw'}}
                                    />
                                }
                            </div>
                            <Input
                                text={'Nama'} 
                                type={'text'}
                                name={'nama'}
                                id={'nama'}
                                onChange={(e) => {
                                    setDataPakar((prev) => ({
                                        ...prev,
                                        nama : e.target.value,
                                    }))
                                }}
                                value={dataPakar.nama}
                                classNameLabel=" me-5 text-white  col-2"
                            />
                            <div className="d-flex flex-row mb-3">
                                <label className=" me-5  col-2 text-white">Jenis Kelamin</label>
                                <select
                                    id="jenKel"
                                    className="form-control"
                                    style={{width:'fit-content'}}
                                    name="jenKel"
                                    onChange={(e) => {
                                        setDataPakar((prev) => ({
                                            ...prev,
                                            jenKel : e.target.value,
                                        }))
                                    }}
                                >
                                    <option value={'---'}>pilih</option>
                                    <option value={'Laki-Laki'}>Laki-Laki</option>
                                    <option value={'Perempuan'}>Perempuan</option>
                                </select>
                            </div>
                            <Input
                                classNameLabel=" me-5  col-2 text-white"
                                text={'Telp'}
                                type={'text'}
                                name={'telp'}
                                id={'telp'}
                                onChange={(e) => {
                                    setDataPakar((prev) => ({
                                        ...prev,
                                        telp : e.target.value,
                                    }))
                                }}
                                value={dataPakar.telp}
                            />
                        </div>
                        <div className="col-3 ">
                            <div className="d-flex flex-column" style={{width:'fit-content'}}>
                                <Button
                                    text={'Tambah'}
                                    type={'submit'}
                                />
                                <Button
                                    text={'Report'}
                                    className={'mt-3'}
                                    type={'button'}
                                />
                                <Link to={'/menuAdmin'} className="btn btn-primary mt-3">
                                    Keluar
                                </Link>
                            </div>
                        </div>
                    </form>                  
                </div>                
                <div style={{backgroundColor:'var(--secondary)', width:'fit-content'}} className="p-1 pe-3 mt-3 mb-4 rounded">
                        <Cari
                            text={'ID'}
                        />
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Jenis Kelamin</th>
                            <th>Telepon</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pakar?.map((item)=> 
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.jenKel}</td>
                                    <td>{item.telp}</td>
                                    <td className="col-lg-1">
                                        <button className="bg-success pb-2 m-0 rounded btn">
                                            <img src={pencil} alt="edit"/>
                                        </button>
                                        <button 
                                            className="bg-danger pb-2 m-0 ms-3 rounded btn"
                                            onClick={() => {
                                                handleDelete(item.id)}}
                                        >
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