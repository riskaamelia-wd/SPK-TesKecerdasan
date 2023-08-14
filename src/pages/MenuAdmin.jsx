import { Link } from "react-router-dom"
import Menu from "../components/Menu"


const MenuAdmin = () => {
    return(
        <>
            <Menu
                menu={'Menu Admin'}
                text1={'Data Siswa'}
                text2={'Data Pakar'}
                text3={'Data Soal'}
                text4={'Data Hasil'}
                link1={'/dataSiswa'}
                link2={'/dataPakar'}
                link3={'/dataSoal'}
                link4={'/dataHasil'}
            />
        </>
    )
}

export default MenuAdmin