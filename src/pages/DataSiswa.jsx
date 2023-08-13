import { Link } from "react-router-dom"
import Id from "../components/Cari"
import Button from "../elements/Button"
import Input from "../elements/Input"
import Judul from "../elements/Judul"
import Cari from "../components/Cari"

const DataSiswa = () => {
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
                <div className="row col-12 mb-4">
                    <div  style={{backgroundColor:'var(--secondary)'}} className="rounded p-3 col-7 col-lg-5 m-auto">
                        <table >
                            <tr>
                                <td><label>ID Siswa</label></td>
                                <td></td>
                                <td className="col-10">
                                    <input
                                        type={'text'}                
                                        name={'id'}
                                        // value = {value}
                                        // onChange = {onChange}
                                        className ={`form-control`}
                                        id={'id'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Nama</label></td>
                                <td></td>
                                <td>
                                    <input
                                        type={'text'}                
                                        name={'nama'}
                                        // value = {value}
                                        // onChange = {onChange}
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
                                        name={'tgl'}
                                        id={'tgl'}
                                        // value = {value}
                                        // onChange = {onChange}
                                        className ={`form-control`}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>No.Hp</label></td>
                                <td></td>
                                <td>
                                    <input
                                        type={'number'}                
                                        name={'hp'}
                                        id={'hp'}
                                        // value = {value}
                                        // onChange = {onChange}
                                        className ={`form-control`}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Jenis Kelamin</label></td>
                                <td></td>
                                <td>
                                    <select
                                        id="jenisKelamin"
                                        className="form-control"
                                        name="jenisKelamin"
                                        // onChange={''}
                                    >
                                        {/* { */}
                                            <option value={'---'}>pilih</option>
                                            <option value={'laki-laki'}>Laki-laki</option>
                                            <option value={'wanita'}>Wanita</option>
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
                                        // onChange={''}
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
                                        // onChange={''}
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
                    <div className="col-3 col-lg-2 ms-lg-1 m-auto rounded" style={{backgroundColor:'var(--secondary)', height:'fit-content'}}>
                        <div className="col-10 m-auto d-flex flex-column">
                            <Button
                                className={'mb-3 mt-3'}
                                text={'Simpan'}
                            />
                            <Button
                                className={'mb-3'}
                                text={'Batal'}
                            />
                            <Button
                                className={'mb-3'}
                                text={'Hapus'}
                            />
                            <Link to={'/menuUtama'} className="btn btn-primary mb-3">Keluar</Link>
                        </div>
                    </div>
                </div>
                <div  className="mb-3 mt-2 col-6 ">
                    <div style={{backgroundColor:'var(--secondary)'}} className="col-lg-5 col-12 m-auto p-1 pe-3 rounded">
                        <Cari
                        text={'ID'}/>
                    </div>
                </div>
                <div className="col-10 m-auto mt-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID Siswa</th>
                                <th>Nama</th>
                                <th>Tanggal Lahir</th>
                                <th>No.Hp</th>
                                <th>Jenis Kelamin</th>
                                <th>Jurusan</th>
                                <th>Kelas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>John</td>
                                <td>01 januari 1911</td>
                                <td>0822222222</td>
                                <td>L</td>
                                <td>IPA</td>
                                <td>11-1</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>John</td>
                                <td>01 januari 1911</td>
                                <td>0822222222</td>
                                <td>L</td>
                                <td>IPA</td>
                                <td>11-1</td>
                            </tr>
                            <tr>
                                <td>0001</td>
                                <td>John</td>
                                <td>01 januari 1911</td>
                                <td>0822222222</td>
                                <td>L</td>
                                <td>IPA</td>
                                <td>11-1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DataSiswa