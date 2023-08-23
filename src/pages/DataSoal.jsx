import { Link } from "react-router-dom"
import Button from "../elements/Button"
import Input from "../elements/Input"
import Judul from "../elements/Judul"
import { useMutation, useQuery } from "@apollo/client"
import { getSoal } from "../graphql/query"
import { useEffect, useState } from "react"
import trash from '../assets/trash.svg'
import { Navbar } from "../components/Navbar"
import { addSoal, deleteSoal } from "../graphql/mutation"
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (data) => {  
    const doc = new jsPDF();
    const tableColumn = ["Id", "Tipe Kecerdasan", "Soal"];
    const tableRows = [];

    data.forEach(item => {
        const itemData = [
            item.id,
            item.tipeKecerdasan,
            item.soal
        ]
        tableRows.push(itemData)
    });

    doc.text("Data Soal", 10, 10)
    doc.autoTable(tableColumn, tableRows)
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    doc.text(dateString, 140, 15);
    doc.save('data-soal.pdf')
}

export const DataSoal = () => {
    const {data, loading, error} = useQuery(getSoal)
    const [soal,setSoal] = useState([])
    const reportData = data?.soal
    const [dataSoal, setDataSoal] = useState({
        tipeKecerdasan : '',
        soal:''
    })
    const lastId = data?.soal[data?.soal.length - 1]?.id;
    useEffect(() => {
        if(!loading && !error){
            setSoal(data.siswa)
        }
    }, [loading])

    const [ADD_SOAL] = useMutation(addSoal, {refetchQueries:[getSoal]})

    const [DELETE_SOAL] = useMutation(deleteSoal,{
        refetchQueries:[getSoal]
    })

    const handleSubmit = async (e)  => {
        e.preventDefault()
        if(tipeKecerdasan !== '' && soal !== '' ){
            await ADD_SOAL({
                variables:{
                    object : {
                        tipeKecerdasan : dataSoal.tipeKecerdasan,
                        soal : dataSoal.soal,
                    }
                }
            })
        }
        alert("Data added successfully");
        setDataSoal({
            tipeKecerdasan : '',
            soal: ''
        })
        window.location.reload()
    }

    const handleDelete = async (item) => {
        try {
            await DELETE_SOAL({
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
            <div className=" pb-5" style={{backgroundColor:'var(--primary)', height:'fit-content'}}>
                <Judul
                    text={'Data Soal'}
                />
                <div className="col-11 m-auto ">
                    <form onSubmit={handleSubmit}>
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
                                    name={'tipeKecerdasan'}
                                    id={'tipeKecerdasan'}
                                    onChange={(e) => {
                                        setDataSoal((prev) => ({
                                            ...prev,
                                            tipeKecerdasan : e.target.value,
                                        }))
                                    }}
                                    value={dataSoal.tipeKecerdasan}
                                />
                                <Input
                                    text={'Soal'}   
                                    className={'col-12'} 
                                    classNameLabel={'me-4 col-3 text-white'}
                                    name={'soal'}
                                    id={'soal'}
                                    onChange={(e) => {
                                        setDataSoal((prev) => ({
                                            ...prev,
                                            soal : e.target.value,
                                        }))
                                    }}
                                    value={dataSoal.soal}
                                />
                            </div>
                            <div className=" pb-3 col-1">
                                <div className="d-flex justify-content-end flex-column" style={{width:'fit-content'}}>
                                    <Button
                                        text={'Tambah'}
                                        type={'submit'}
                                    />
                                    <Button
                                        text={'Report'}
                                        type={'button'}
                                        onClick={() => generatePDF(reportData)}
                                        className={'mt-3'}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
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
                                    <td colSpan={'4'}>Loading...</td>
                                </tr>
                                :
                                data?.soal?.map((item, idx)=> 
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.tipeKecerdasan}</td>
                                        <td>{item.soal}</td>
                                        <td>                                        
                                            <button className="bg-danger pb-2 m-0 rounded btn"
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
        </>
    )
}