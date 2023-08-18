import img from '../assets/img.jpeg'
import { Navbar } from '../components/Navbar'
export const MenuUtama2 = () => {
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
            <div className='row d-flex justify-content-center'>
                <div className='col-12 row'>
                    <img className='col-3 m-auto pt-5' src={img} alt="" />
                </div>
                <h1 className='col-12 text-center pt-5 pb-2'>SELAMAT DATANG</h1>
                <p className='fs-4 col-12 text-center'>Sistem Pakar Penentuan Program Studi (SiPakarProdi)</p>
            </div>
        </>
    )
}