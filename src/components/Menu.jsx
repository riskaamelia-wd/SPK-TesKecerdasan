import { Link } from "react-router-dom"


const Menu = ({text1, text2, text3, text4, text5, link1, link2, link3, link4, link5, menu}) => {
    return(
        <div  style={{backgroundColor:'var(--primary)', height:'100vh', paddingTop:'120px'}} className="pb-5">
            <h2 className="mb-4 text-center text-white pt-4">{menu}</h2>
            <div  style={{backgroundColor:'var(--secondary)'}} className="d-flex flex-column col-md-3 col-6 mx-auto p-4 rounded">
                <Link to={link1} className="mb-3 btn btn-primary">{text1}</Link>
                <Link to={link2} className="mb-3 btn btn-primary">{text2}</Link>
                <Link to={link3} className="mb-3 btn btn-primary">{text3}</Link>
                <Link to={link4} className=" btn btn-primary">{text4}</Link>
                {text5 && <Link to={link5} className="mt-3 btn btn-primary">{text5}</Link>}
            </div>
        </div>
    )
}

export default Menu