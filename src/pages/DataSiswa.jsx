import { useMutation, useQuery } from "@apollo/client"
import Cari from "../components/Cari"
import Judul from "../elements/Judul"
import { getSiswa, searchSiswa } from "../graphql/query"
import { useEffect, useState } from "react"
import Button from "../elements/Button"
import trash from '../assets/trash.svg'
import { Navbar } from "../components/Navbar"
import { deleteSiswa } from "../graphql/mutation"
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (data) => {  
    const doc = new jsPDF();
    const tableColumn = ["Id","NIS", "Nama","Tanggal Lahir","No. HP", "Jenis Kelamin", "Jurusan", "Kelas"];
    const tableRows = [];

    data.forEach(item => {
        const itemData = [
            item.id,
            item.nis,
            item.nama,
            item.tglLahir,
            item.noHp,
            item.jenKel,
            item.jurusan,
            item.kelas
        ]
        tableRows.push(itemData)
    });

    doc.text("Data Siswa", 14, 15)
    doc.autoTable(tableColumn, tableRows, {startY:20})
    doc.save('data-siswa.pdf')
}

export const DataSiswa = () => {
    const [searchText, setSearch] = useState('')
    const {data, loading, error, refetch} = useQuery(searchSiswa,{
        variables:{nis: `%${searchText}%`}
    })
    const [siswa, setSiswa] = useState([])
    const reportData = data?.siswa;
    useEffect(() => {
        if(!loading && !error){
            setSiswa(data.siswa)
        }
    }, [loading])

    const [DELETE_SISWA] = useMutation(deleteSiswa, {refetchQueries:[{getSiswa}]})

    const handleDelete = async (item) => {
        console.log(item);
        try {
            await DELETE_SISWA({
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

    const handleSeacrh =(e) => {
        e.preventDefault()
        refetch({search:searchText})
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
            <div style={{backgroundColor:'var(--primary)', height:'100vh'}}>
                <Judul text={'Data Siswa'}/>
            <div className="col-11 m-auto mt-5">
                    <Cari
                        classNameLabel={'text-white'}
                        type={'text'}
                        text={'NIS'}
                        name={'searchNis'}
                        htmlFor={'nis'}
                        value={searchText}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
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
                                <th></th>
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
                                        <td>            
                                            <button className="bg-danger pb-2 m-0 rounded btn"
                                            onClick={() => {handleDelete(item.id)}}
                                            >
                                                <img src={trash} alt="delete"/>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                            <Button
                                text={'Report'}
                                onClick={() => generatePDF(reportData)}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}