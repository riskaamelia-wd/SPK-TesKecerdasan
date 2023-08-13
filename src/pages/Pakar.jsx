import { Link } from "react-router-dom"
import Cari from "../components/Cari"
import Button from "../elements/Button"
import Judul from "../elements/Judul"

const Pakar = () => {
    return(
        <div style={{backgroundColor:'var(--primary)', height:'100vh'}}>
            <Judul
                className={'text-center pt-4 pb-3'}
                text={'Pakar'}
            />
            <div style={{backgroundColor:'var(--secondary)'}} className="col-6 col-lg-3 ms-lg-5 pt-1 pb-1 ms-4 rounded">
                <Cari
                    text={'Nama'}
                />
            </div>

            {/* <div className="d-flex flex-row col-7">
                <label htmlFor="nama" className="me-3">Nama</label>
                <input 
                    type="text" 
                    name="nama" 
                    id="nama"
                    className="form-control me-3"
                 />
                 <Button
                    text={'Cari'}
                 />
            </div> */}

            <div className="mt-3 mb-3 col-11 m-auto">
                <table className=" table table-secondary">
                    <thead>
                        <tr>
                            <th>ID Pakar</th>
                            <th>Nama</th>
                            <th>Jenis Kelamin</th>
                            <th>Telp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0001</td>
                            <td>John</td>
                            <td>L</td>
                            <td>082222222</td>
                        </tr>
                        <tr>
                            <td>0001</td>
                            <td>John</td>
                            <td>L</td>
                            <td>082222222</td>
                        </tr>
                        <tr>
                            <td>0001</td>
                            <td>John</td>
                            <td>L</td>
                            <td>082222222</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-end me-2 me-lg-5">
                <Link className="btn btn-primary " to={'/menuUtama'}>Keluar</Link>
            </div>
        </div>
    )
}

export default Pakar