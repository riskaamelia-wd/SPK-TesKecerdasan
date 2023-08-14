import { Link, useNavigate } from "react-router-dom"
import Button from "../elements/Button"
import Menu from "../components/Menu"


const MenuUtama = () => {
    const navigate = useNavigate()
    return(
       <>
        <Menu
            menu={'Menu Utama'}
            text1={'Siswa'}
            text2={'Pakar'}
            text3={'Informasi Kecerdasan'}
            text4={'Tes Kecerdasan'}
            text5={'Hasil Tes'}
            link1={'/siswa'}
            link2={'/pakar'}
            link3={'/informasiKecerdasan'}
            link4={'/tesKecerdasan'}
            link5={'/hasilTes'}
        />
       </>
    )
}

export default MenuUtama