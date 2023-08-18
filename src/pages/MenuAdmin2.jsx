import { Navbar } from "../components/Navbar"

export const MenuAdmin2 = () => {
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
            <h1 className="text-center" style={{marginTop:'18%'}}>SELAMAT DATANG DI MENU ADMIN</h1>
        </>
    )
}