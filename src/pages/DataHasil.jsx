import { Link } from "react-router-dom"
import Cari from "../components/Cari"
import Judul from "../elements/Judul"
import Button from "../elements/Button"
import { useQuery } from "@apollo/client"
import { getTes } from "../graphql/query"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (data) => {  
    const doc = new jsPDF();
    const tableColumn = ["Id","NIS", "Tanggal Tes", "Nama", "Tipe Kecerdasan", "Program Studi"];
    const tableRows = [];

    data.forEach(item => {
        const itemData = [
            item.id,
            item.nis,
            item.tglTes,
            item.nama,
            item.tipeKecerdasan,
            item.prodi
        ]
        tableRows.push(itemData)
    });

    doc.text("Data Hasil", 14, 15)
    doc.setFontSize(8);
    let dateString = moment().format('LL')
    doc.text(dateString, 170, 15);
    doc.autoTable(tableColumn, tableRows, {startY:20})
    doc.save('data-hasil.pdf')
}

export const DataHasil = () => {
    const [searchText, setSearch] = useState('')
    const {data, loading, error} = useQuery(getTes, {variables:{nama:`%${searchText}%`}})
    const [tes, setTes] = useState([])
    const reportData = data?.tes
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
                        text={'Nama'}
                        classNameLabel={'text-white'}
                        type={'text'}
                        name={'searchNama'}
                        htmlFor={'nama'}
                        value={searchText}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <table className="table table-striped mt-3">
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
                                    <td className='text-center' colSpan='6'>loading....</td>
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
                        onClick={() => generatePDF(reportData)}
                    />
                </div>
            </div>
        </>
    )
    }