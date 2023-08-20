import { Link } from "react-router-dom"

export const Navbar = ({linkMenu, link1, link2, link3, link4,text1, text2, text3, text4, text5, link5, text6}) => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SiPakarProdi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link aria-current="page" className="nav-link active" to={linkMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={link1} className="nav-link">{text1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={link2} className="nav-link">{text2}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={link3} className="nav-link">{text3}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={link4} className="nav-link">{text4}</Link>
                        </li>
                        {
                            text5 && <li className="nav-item">
                            <Link to={link5} className="nav-link">{text5}</Link>
                        </li>
                        }                        
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link  text-danger">Logout</Link>
                        </li>                     
                        <li className="nav-item">
                            <Link to={'/menuAdmin'} className="nav-link  text-danger">Admin</Link>
                        </li>                      
                        <li className="nav-item">
                            <Link to={'/dataSiswa'} className="nav-link  text-danger">Data Siswa</Link>
                        </li>                     
                        <li className="nav-item">
                            <Link to={'/dataPakar'} className="nav-link  text-danger">Data Pakar</Link>
                        </li>                      
                        <li className="nav-item">
                            <Link to={'/dataSoal'} className="nav-link  text-danger">Data Soal</Link>
                        </li>                     
                        <li className="nav-item">
                            <Link to={'/dataHasil'} className="nav-link  text-danger">Data Hasil</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}