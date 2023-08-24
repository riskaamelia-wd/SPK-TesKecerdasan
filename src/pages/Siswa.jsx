import { Link } from "react-router-dom"
import trash from '../assets/trash.svg'
import Button from "../elements/Button"
import Input from "../elements/Input"
import Judul from "../elements/Judul"
import Cari from "../components/Cari"
import { useMutation, useQuery } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { addSiswa, deleteSiswa } from "../graphql/mutation"
import { getSiswa, searchSiswa } from "../graphql/query"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { addSiswaGlobal } from "../redux/slice/siswaSlice"

const validate = values => {
    const error = {}

    if (!values.nama){
        error.nama = 'Required'
    }

    if (!values.nis){
        error.nis = 'Required'
    }

    if (!values.tglLahir){
        error.tglLahir = 'Required'
    }

    if (!values.noHp){
        error.noHp = 'Required'
    }

    if (!values.jenKel){
        error.jenKel = 'Required'
    }

    if (!values.jurusan){
        error.jurusan = 'Required'
    }

    if (!values.kelas){
        error.kelas = 'Required'
    }

    return error
}

const Siswa = () => {    
    const navigate = useNavigate()
    const dispatch = useDispatch
    // const siswaGlobal = useSelector((state) => state.siswa.siswa)
    const [siswa, setSiswa] = useState([])
    const [searchText, setSearch] = useState('')

    const {data, loading, error, refetch} = useQuery(searchSiswa,{
        variables:{nis: `%${searchText}%`}
    })
    useEffect(() => {
        if(!loading && !error){
            setSiswa(data.siswa)
        }
    }, [loading, data?.siswa])

    const [ADD_SISWA] = useMutation(addSiswa,{
        refetchQueries:[{query:searchSiswa}]
    })
    // const [DELETE_SISWA] = useMutation(deleteSiswa, 
    //     {refetchQueries:[{searchSiswa}]
    // })
    const [DELETE_SISWA] = useMutation(deleteSiswa, {refetchQueries:[searchSiswa]})


    const [values, setDataSiswa] = useState({
        nis:'',
        nama:'',
        tglLahir:'',
        noHp:'',
        jenKel:'',
        jurusan:'',
        kelas:''
    })


    // const formik = useFormik({
    //     initialValues:{
    //         nis:'',
    //         nama:'',
    //         tglLahir:'',
    //         noHp:'',
    //         jenKel:'',
    //         jurusan:'',
    //         kelas:''
    //     },
    //     validate,
    //     onSubmit:async values => {
    //         if(values.nama !== '', values.nis !== '', values.tglLahir !== '', values.noHp !== '',values.jenKel !== '', values.jurusan !== '', values.kelas !== '' ){
    //             // dispatch(addSiswaGlobal(values))
    //             await ADD_SISWA({
    //                 variables:{
    //                     object: {
    //                         nis:values.nis,
    //                         nama:values.nama,
    //                         tglLahir:values.tglLahir,
    //                         noHp:values.noHp,
    //                         jenKel:values.jenKel,
    //                         jurusan:values.jurusan,
    //                         kelas:values.kelas,
    //                     }
    //                 }
    //             })
    //             alert('Add Data Successfully')
    //             // window.location.reload()
    //         }
    //     }
    // })
    
    const jurusan = [
        {value:'---', text:'pilih'},
        {value:'IPA', text:'IPA'},
        {value:'IPS', text:'IPS'}
    ]

    const kelas = [
        {value:'---', text:'pilih'},
        {value:'11-1', text:'11-1'},
        {value:'11-2', text:'11-2'},
        {value:'11-3', text:'11-3'},
        {value:'11-4', text:'11-4'},
    ]

    
    const handleSubmit = async (e)  => {
        e.preventDefault()
        if(values.nama !== '', values.nis !== '', values.tglLahir !== '', values.noHp !== '',values.jenKel !== '', values.jurusan !== '', values.kelas !== ''){
            await ADD_SISWA({
                variables:{
                    object : {
                        nis:values.nis,
                        nama:values.nama,
                        tglLahir:values.tglLahir,
                        noHp:values.noHp,
                        jenKel:values.jenKel,
                        jurusan:values.jurusan,
                        kelas:values.kelas,
                    }
                }
            })
            // dispatch(addPakarGlobal(dataPakar))
            alert("Data added successfully");
        }
        setDataSiswa({
            nama : '',
            nis:'',
            tglLahir:'',
            noHp:'',
            jenKel:'',
            jurusan:'',
            kelas:'',
        })
        // window.location.reload()
    }

    const handleDelete = async (item) => {
        try {
            await DELETE_SISWA({
                variables: {
                    id: item
                }
            });
            alert("Item deleted successfully");
            // window.location.reload()
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
            <div className="row" style={{backgroundColor:'var(--primary)', height:'fit-content'}}>
                <Judul 
                    text={'Data Siswa'}
                />
                {/* <div  className="mb-3 mt-2 col-6 ">
                    <div style={{backgroundColor:'var(--secondary)'}} className="col-lg-5 col-12 m-auto p-1 pe-3 rounded">                        
                        <Cari
                            type={'text'}
                            text={'NIS'}
                            name={'searchNis'}
                            htmlFor={'nis'}
                            value={searchText}
                            onClick={handleSeacrh}
                            onChange={(e)=>setSearch(e.target.value)}
                        />
                    </div>
                </div> */}
                <div className="col-11 m-auto mt-3">
                    
                <form 
                    onSubmit={handleSubmit}
                    // onReset={formik.handleReset} onSubmit={formik.handleSubmit}
                >
                    <div className="row col-12 mb-4">
                        <div className="col-11 col-lg-7 d-flex flex-row jutidy-content-between">
                            <div  style={{backgroundColor:'var(--secondary)'}}  className="col-9 me-2 p-3 rounded">
                                <table >
                                    <tr>
                                        <td><label>NIS</label></td>
                                        <td></td>
                                        <td className="col-10">
                                            <input
                                                type={'text'}                
                                                name={'nis'}
                                                value = {values.nis}
                                                // onChange = {formik.handleChange}
                                                onChange={(e) => {
                                                    setDataSiswa((prev) => ({
                                                        ...prev,
                                                        nis : e.target.value,
                                                    }))
                                                }}
                                                className ={`form-control`}
                                                id={'nis'}
                                            />
                                        </td>
                                        {/* <td>
                                        {formik.errors.nis ? <div className='text-danger fw-light '>{formik.errors.nis}</div> : null}
                                        </td> */}
                                    </tr>
                                    <tr>
                                        <td><label>Nama</label></td>
                                        <td></td>
                                        <td>
                                            <input
                                                type={'text'}                
                                                name={'nama'}
                                                value = {values.nama}
                                                onChange={(e) => {
                                                    setDataSiswa((prev) => ({
                                                        ...prev,
                                                        nama : e.target.value,
                                                    }))
                                                }}
                                                className ={`form-control`}
                                                id={'nama'}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Tanggal Lahir</label></td>
                                        <td></td>
                                        <td>
                                            <input
                                                type={'date'}                
                                                name={'tglLahir'}
                                                id={'tglLahir'}
                                                value = {values.tglLahir}
                                                onChange={(e) => {
                                                    setDataSiswa((prev) => ({
                                                        ...prev,
                                                        tglLahir : e.target.value,
                                                    }))
                                                }}
                                                className ={`form-control`}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>No.Hp</label></td>
                                        <td></td>
                                        <td>
                                            <input
                                                type={'text'}                
                                                name={'noHp'}
                                                id={'noHp'}
                                                value = {values.noHp}
                                                onChange={(e) => {
                                                    setDataSiswa((prev) => ({
                                                        ...prev,
                                                        noHp : e.target.value,
                                                    }))
                                                }}
                                                className ={`form-control`}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Jenis Kelamin</label></td>
                                        <td></td>
                                        <td>
                                            <select
                                                id="jenKel"
                                                className="form-control"
                                                name="jenKel"
                                                onChange={(e) => {
                                                    setDataSiswa((prev) => ({
                                                        ...prev,
                                                        jenKel : e.target.value,
                                                    }))
                                                }}
                                            >
                                                {/* { */}
                                                    <option value={'---'}>pilih</option>
                                                    <option value={'Laki-laki'}>Laki-laki</option>
                                                    <option value={'Perempuan'}>Perempuan</option>
                                                {/* } */}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Jurusan</label></td>
                                        <td></td>
                                        <td>
                                            <select
                                                id="jurusan"
                                                className="form-control"
                                                name="jurusan"
                                                onChange={(e) => {
                                                    setDataSiswa((prev) => ({
                                                        ...prev,
                                                        jurusan : e.target.value,
                                                    }))
                                                }}
                                            >
                                                {
                                                    jurusan?.map(option => (
                                                        <option
                                                            value={option.value}
                                                            key={option.value}
                                                        >
                                                            {option.text}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Kelas</label></td>
                                        <td></td>
                                        <td>
                                            <select
                                                id="kelas"
                                                className="form-control"
                                                name="kelas"
                                                onChange={(e) => {
                                                    setDataSiswa((prev) => ({
                                                        ...prev,
                                                        kelas : e.target.value,
                                                    }))
                                                }}
                                            >
                                                {
                                                    kelas?.map(option => (
                                                        <option
                                                            value={option.value}
                                                            key={option.value}
                                                        >
                                                            {option.text}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="ms-4 rounded d-flex flex-column col-2" style={{height:'fit-content'}}>
                                <Button
                                    className={'mb-3 mt-3'}
                                    type={'submit'}
                                    text={'Simpan'}
                                />
                                <Button
                                    className={'mb-3'}
                                    type={'reset'}
                                    onClick={ e => formik.resetForm()}
                                    text={'Batal'}
                                />
                            </div>
                        </div>                        
                    </div>
                </form>
                    <Cari
                        type={'text'}
                        classNameLabel={'text-white'}
                        text={'NIS'}
                        name={'searchNis'}
                        htmlFor={'nis'}
                        value={searchText}
                        onClick={handleSeacrh}
                        onChange={(e)=>setSearch(e.target.value)}
                        />
                    <table className="table table-striped mt-2">
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
                            //    loading?
                            //    <tr>
                            //     <td>loading...</td>
                            //    </tr>
                            //    : 
                            
                               data?.siswa?.map((item, idx) => 
                                // <p>{item.nis}</p>
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
                </div>
            </div>
        </>
    )
}

export default Siswa