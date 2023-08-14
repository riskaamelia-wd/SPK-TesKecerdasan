import { Link } from "react-router-dom"
import Id from "../components/Cari"
import Button from "../elements/Button"
import Input from "../elements/Input"
import Judul from "../elements/Judul"
import Cari from "../components/Cari"
import { useMutation, useQuery } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { addSiswa } from "../graphql/mutation"
import { getSiswa } from "../graphql/query"
import { useFormik } from "formik"
import { useEffect, useState } from "react"

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
    const [siswa, setSiswa] = useState([])

    const {data, loading, error} = useQuery(getSiswa)
    useEffect(() => {
        console.log(data);
        if(!loading && !error){
            setSiswa(data.siswa)
        }
    }, [loading])

    const [add] = useMutation(addSiswa,{
        refetchQueries:[{query:getSiswa}]
    })

    const formik = useFormik({
        initialValues:{
            nis:'',
            nama:'',
            tglLahir:'',
            noHp:'',
            jenKel:'',
            jurusan:'',
            kelas:''
        },
        validate,
        onSubmit:async values => {
            if(values.nama !== '', values.nis !== '', values.tglLahir !== '', values.noHp !== '',values.jenKel !== '', values.jurusan !== '', values.kelas !== '' ){
                await add({
                    variables:{
                        object: {
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
                console.log(add);
            }
        }
    })

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

    return(
        <>
            <div className="row" style={{backgroundColor:'var(--primary)', height:'fit-content'}}>
                <Judul className={' col-12 text-center ms-4 pt-3 pb-3'} text={'Data Siswa'}/>
                <form onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
                    <div className="row col-12 mb-4">
                        <div  style={{backgroundColor:'var(--secondary)'}} className="rounded p-3 col-7 col-lg-5 m-auto">
                            <table >
                                <tr>
                                    <td><label>NIS</label></td>
                                    <td></td>
                                    <td className="col-10">
                                        <input
                                            type={'text'}                
                                            name={'nis'}
                                            value = {formik.values.nis}
                                            onChange = {formik.handleChange}
                                            className ={`form-control`}
                                            id={'nis'}
                                        />
                                    </td>
                                    <td>
                                    {formik.errors.nis ? <div className='text-danger fw-light '>{formik.errors.nis}</div> : null}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Nama</label></td>
                                    <td></td>
                                    <td>
                                        <input
                                            type={'text'}                
                                            name={'nama'}
                                            value = {formik.values.nama}
                                            onChange = {formik.handleChange}
                                            className ={`form-control`}
                                            id={'nama'}
                                        />
                                    </td>
                                    <td>
                                    {formik.errors.nama ? <div className='text-danger fw-light '>{formik.errors.nama}</div> : null}
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
                                            value = {formik.values.tglLahir}
                                            onChange = {formik.handleChange}
                                            className ={`form-control`}
                                        />
                                    </td>
                                    <td>
                                    {formik.errors.tglLahir ? <div className='text-danger fw-light '>{formik.errors.tglLahir}</div> : null}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>No.Hp</label></td>
                                    <td></td>
                                    <td>
                                        <input
                                            type={'number'}                
                                            name={'noHp'}
                                            id={'noHp'}
                                            value = {formik.values.noHp}
                                            onChange = {formik.handleChange}
                                            className ={`form-control`}
                                        />
                                    </td>
                                    <td>
                                    {formik.errors.noHp ? <div className='text-danger fw-light '>{formik.errors.noHp}</div> : null}
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
                                            onChange={formik.handleChange}
                                        >
                                            {/* { */}
                                                <option value={'---'}>pilih</option>
                                                <option value={'Laki-laki'}>Laki-laki</option>
                                                <option value={'Perempuan'}>Perempuan</option>
                                            {/* } */}
                                        </select>
                                    </td>
                                    <td>
                                    {formik.errors.jenKel ? <div className='text-danger fw-light '>{formik.errors.jenKel}</div> : null}
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
                                            onChange = {formik.handleChange}
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
                                    <td>
                                    {formik.errors.jurusan ? <div className='text-danger fw-light '>{formik.errors.jurusan}</div> : null}
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
                                            onChange = {formik.handleChange}
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
                                    <td>
                                    {formik.errors.kelas ? <div className='text-danger fw-light '>{formik.errors.kelas}</div> : null}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-3 col-lg-2 ms-lg-1 m-auto rounded" style={{backgroundColor:'var(--secondary)', height:'fit-content'}}>
                            <div className="col-10 m-auto d-flex flex-column">
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
                                <Button
                                    className={'mb-3'}
                                    type={'reset'}
                                    onClick={ e => formik.resetForm()}
                                    text={'Hapus'}
                                />
                                <Link to={'/menuUtama'} className="btn btn-primary mb-3">Keluar</Link>
                            </div>
                        </div>
                    </div>
                </form>
                <div  className="mb-3 mt-2 col-6 ">
                    <div style={{backgroundColor:'var(--secondary)'}} className="col-lg-5 col-12 m-auto p-1 pe-3 rounded">
                        <Cari
                            text={'NIS'}
                        />
                    </div>
                </div>
                <div className="col-11 m-auto mt-3">
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