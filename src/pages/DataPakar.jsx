import { useMutation, useQuery } from "@apollo/client";
import Judul from "../elements/Judul"
import { useEffect, useState } from "react";
import { getPakar } from "../graphql/query";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Cari from "../components/Cari";
import pencil from '../assets/pensil.svg'
import trash from '../assets/trash.svg'
import check from '../assets/check.svg'
import x from '../assets/x.svg'
import { addPakar, deletePakar, editPakar } from "../graphql/mutation";
import { Navbar } from "../components/Navbar";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useDispatch, useSelector } from "react-redux";
import { addPakarGlobal, deletePakarGlobal } from "../redux/slice/pakarSlice";

const generatePDF = (data) => {  
    const doc = new jsPDF();
    const tableColumn = ["Id", "Nama", "Jenis Kelamin", "Telepon"];
    const tableRows = [];

    data.forEach(item => {
        const itemData = [
            item.id,
            item.nama,
            item.jenKel,
            item.telp
        ]
        tableRows.push(itemData)
    });

    doc.text("Data Pakar", 14, 15)
    doc.autoTable(tableColumn, tableRows, {startY:20})
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    doc.text(dateString, 140, 15);
    doc.save('data-pakar.pdf')
}

export const DataPakar = () => {
    const dispatch = useDispatch()
    const pakarGlobal = useSelector((state) => state.pakar)
    const [searchText, setSearch] = useState('')
    const {data, loading, error} = useQuery(getPakar, {variables:{nama:`%${searchText}%`}})
    const [pakar,setPakar] = useState([])
    const reportData = data?.pakar;
    const lastId = data?.pakar[data?.pakar.length - 1]?.id;

    const [dataPakar,setDataPakar] = useState({
        // id:lastId+1,
        nama : '',
        jenKel: '',
        telp: ''
    })
    useEffect(() => {
        if(!loading && !error){
            setPakar(data.pakar)
        }
    }, [loading, data?.pakar])

    const [ADD_PAKAR] = useMutation(addPakar,{
        refetchQueries:[getPakar]
    })
    const [DELETE_PAKAR] = useMutation(deletePakar,{
        refetchQueries:[getPakar]
    })
    const [EDIT_PAKAR] = useMutation(editPakar, {
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
            // dispatch(addPakarGlobal(dataPakar))
            alert("Data added successfully");
        }
        setDataPakar({
            nama : '',
            jenKel: '',
            telp: ''
        })
        // window.location.reload()
    }

    const handleDelete = async (item) => {
        console.log(item);
        try {
            await DELETE_PAKAR({
                variables: {
                    id: item
                }
            });
            // dispatch(deletePakarGlobal(item))
            alert("Item deleted successfully");
        } catch (error) {
            alert("Error deleting item:", error);
        }
    }

    
    const [editMode, setEditMode] = useState({
        nama : '',
        jenKel: '',
        telp: '',
        id:''
    });
    
    const handleEditClick = (id, nama, jenKel, telp) => {
        setEditMode((prevEditModes) => ({
          ...prevEditModes,
           id, nama, jenKel, telp ,
        }));
    };

    const handleSaveClick = async (itemId) => {
        await EDIT_PAKAR({
            variables:{
                id:itemId,
                nama:editMode.nama,
                jenKel:editMode.jenKel,
                telp:editMode.telp
            }
        })
        alert('Data Edited Successfully');
        // window.location.reload()
      };
    
      const handleCancelClick = (itemId) => {
        setEditMode((prevEditMode) => {
          if (prevEditMode.id === itemId) {
            return {
              nama: '',
              jenKel: '',
              telp: '',
              id: '',
            };
          }
          return prevEditMode;
        });
      };
      
      
    //   const combinedArray = pakar.concat(pakarGlobal);
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
            <div className="pb-5" style={{backgroundColor:'var(--primary)', height:'fit-content'}}>
                <Judul
                    text={'Data Pakar'}
                />
                <div className="col-11 m-auto">
                    <div className="col-12 ">
                        <form className="col-12  d-flex flex-row" onSubmit={handleSubmit}>
                            <div className="col-6 p-3 rounded" style={{backgroundColor:'var(--secondary)'}} >  
                                <div className="col-12 d-flex flex-row mb-3" >
                                    <label className=" me-5 col-2">ID Pakar</label>
                                    {
                                        <input 
                                            disabled 
                                            name="id"
                                            type="number"
                                            id="id"
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
                                    classNameLabel=" me-5 col-2"
                                />
                                <div className="d-flex flex-row mb-3">
                                    <label className=" me-5  col-2">Jenis Kelamin</label>
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
                                    classNameLabel=" me-5  col-2"
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
                            <div className="">
                                <div className="d-flex flex-column ms-5" style={{width:'fit-content'}}>
                                    <Button
                                        text={'Tambah'}
                                        type={'submit'}
                                    />
                                    <Button
                                        text={'Report'}
                                        className={'mt-3'}
                                        onClick={() => generatePDF(reportData)}
                                        type={'button'}
                                    />
                                </div>
                            </div>
                        </form>                  
                    </div>                
                    <div style={{width:'fit-content'}} className="text-white mt-4 mb-3 rounded">
                            <Cari
                                text={'Nama'}
                                type={'text'}
                                name={'searchNama'}
                                htmlFor={'nama'}
                                value={searchText}
                                onChange={(e)=>setSearch(e.target.value)}
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
                                        <td> 
                                            {editMode && editMode.id === item.id? (
                                            <input
                                                type="text"
                                                value={editMode.nama}
                                                onChange={(e) =>
                                                    {setEditMode((prevEditModes) => ({
                                                    ...prevEditModes,
                                                    nama: e.target.value,
                                                    }));}
                                                }
                                            />
                                            ) : (
                                            item.nama
                                            )}
                                        </td>
                                        <td>
                                            {editMode && editMode.id === item.id? (
                                            <select
                                            id="jenKel"
                                            className="form-control"
                                            style={{width:'fit-content'}}
                                            name="jenKel"
                                            onChange={(e) => {
                                                setEditMode((prev) => ({
                                                    ...prev,
                                                    jenKel : e.target.value,
                                                }))
                                            }}
                                        >
                                            <option value={'Laki-Laki'}>Laki-Laki</option>
                                            <option value={'Perempuan'}>Perempuan</option>
                                        </select>
                                            ) : (
                                            item.jenKel
                                            )}
                                        </td>
                                        <td>
                                            {editMode && editMode.id === item.id? (
                                            <input
                                                type="text"
                                                value={editMode.telp}
                                                onChange={(e) =>
                                                    {setEditMode((prevEditModes) => ({
                                                    ...prevEditModes,
                                                    telp: e.target.value,
                                                    }));}
                                                }
                                            />
                                            ) : (
                                            item.telp
                                            )}</td>
                                        <td className="col-lg-1">
                                            {editMode && editMode.id === item.id ? (
                                            <>
                                                <button className="bg-success pb-2 m-0 rounded btn">
                                                    <img src={check} alt="edit"
                                                    onClick={() => handleSaveClick(item.id)}
                                                />
                                                </button>
                                                <button 
                                                    className="bg-danger pb-2 m-0 ms-3 rounded btn"
                                                    onClick={() => handleCancelClick(item.id)}
                                                >
                                                <img src={x} alt="delete"/>
                                                </button>
                                            </>
                                            ) : (
                                            <>
                                            <button className="bg-success pb-2 m-0 rounded btn">
                                                <img src={pencil} alt="edit"
                                                onClick={() => handleEditClick(item.id, item.nama, item.jenKel, item.telp)}
                                            />
                                            </button>
                                            <button 
                                                className="bg-danger pb-2 m-0 ms-3 rounded btn"
                                                onClick={() => {
                                                    handleDelete(item.id)}}
                                            >
                                            <img src={trash} alt="delete"/>
                                            </button>
                                            </>
                                                                        
                                            )}
                                        </td>
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