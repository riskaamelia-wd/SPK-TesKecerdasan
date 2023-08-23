import { useMutation, useQuery } from "@apollo/client";
import { Navbar } from "../components/Navbar";
import Button from "../elements/Button";
import CheckBox from "../elements/CheckBox";
import Judul from "../elements/Judul";
import { getSiswa, getSoal, getTes, searchSiswa, searchSiswabyNIS } from "../graphql/query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTes } from "../graphql/mutation";

const TesKecerdasan = () => {    
    const navigate = useNavigate()
    const [tanggal, setTanggal] = useState(new Date());
    const [searchNis, setSearchNis] = useState('')
    const {data, loading, error} = useQuery(getSoal)
    // const {data:dataSiswa , loading:loadingSiswa, error:errorSiswa} = useQuery(searchSiswabyNIS)
    const {data:dataSiswa , loading:loadingSiswa, error:errorSiswa} = useQuery(searchSiswabyNIS,{
        variables:{eqNis: `${searchNis}`}
    })
    const [soal, setSoal] = useState([])
    const [siswa, setSiswa] = useState([])
    const [selectedIntelligences, setSelectedIntelligences] = useState({});
    const [items, setItems] = useState([])
    const [tes, setTes] = useState({
        nama:'',
        nis:"",
        tglTes:tanggal.toISOString().substr(0, 10),
        tipeKecerdasan:'',
        prodi:''
    })
    useEffect(() => {
        if(!loading && !error){
            setSoal(data?.soal)
        }
        if(!loadingSiswa && !errorSiswa && searchNis){
            setSiswa(dataSiswa?.siswa)
        }
        
    }, [loading, loadingSiswa, searchNis])
    const firstSiswa = dataSiswa?.siswa[0];
    useEffect(() => {
        // Set nilai tanggal saat komponen dimuat
        setTanggal(new Date());
      }, []);
    
    const [kinestetik, setKinestetik] = useState({})    
    const [linguistik, setLinguistik] = useState({})
    const [logis, setLogis] = useState({})
    const [spasial, setSpasial] = useState({})
    const [ritmik, setRitmik] = useState({})
    const [interpersonal, setInterpersonal] = useState({})
    const [intrapersonal, setIntrapersonal] = useState({})
    const [naturalis, setNaturalis] = useState({})
    const [eksistensial, setEksistensial] = useState({})

    const handleCheckboxChange = ({tipe, itemName, isChecked}) => {
        
        if (tipe=='Kinestetik'){
            setKinestetik((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Kedokteran Gigi, Seni Tari, Kebidanan, Tata Busana, Ilmu Keolahragan, Ilmu Bedah'
            }));
        }else if (tipe =="Linguistic Verbal"){
            setLinguistik((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Ilmu Komunikasi, Bahasa dan Sastra, Ilmu Hukum, Jurnalistik'
            }));
        }else if (tipe =="Logis Matematis"){
            setLogis((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Akuntansi, Matematika, Statistika, Aktuaria, Teknik Informatika, Sistem Informasi, Ekonomi'
            }));
        }else if (tipe =="Spasial Visual"){
            setSpasial((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Arsitektur, Seni Rupa, DKV< Teknik Sipil, Fotografi, Planologi'
            }));
        }else if (tipe =="Ritmik Musikal"){
            setRitmik((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Seni Musik'
            }));
        }else if (tipe =="Interpersonal"){
            setInterpersonal((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Ilmu Keperawatan, Kesehatan Masyarakat, PSikologi, PGSD'
            }));
        }else if (tipe =="Intrapersonal"){
            setIntrapersonal((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Ilmu Agama, Administrasi Niaga'
            }));
        }else if (tipe =="Naturalis"){
            setNaturalis((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Kedokteran Hewan, Peternakan, Perikanan, Pertanian, Kelautan, Kehutanan, Ilmu Biologi'
            }));
        }else if (tipe =="Eksistensial"){
            setEksistensial((prev)=>({...prev,[itemName]:isChecked}))
            setTes(prev => ({
                ...prev,
                prodi: 'Ilmu Filsafat, Ilmu Sejarah'
            }));
        }
        const categoryCounts = {
            Kinestetik: Object.keys(kinestetik).filter(key => kinestetik[key]).length,
            "Linguistic Verbal": Object.keys(linguistik).filter(key => linguistik[key]).length,
            "Logis Matematis": Object.keys(logis).filter(key => logis[key]).length,
            "Spasial Visual": Object.keys(spasial).filter(key => spasial[key]).length,
            "Ritmik Musikal": Object.keys(ritmik).filter(key => ritmik[key]).length,
            Interpersonal: Object.keys(interpersonal).filter(key => interpersonal[key]).length,
            Intrapersonal: Object.keys(intrapersonal).filter(key => intrapersonal[key]).length,
            Naturalis: Object.keys(naturalis).filter(key => naturalis[key]).length,
            Eksistensial: Object.keys(eksistensial).filter(key => eksistensial[key]).length
        };
    
        let maxCategory = "";
        let maxCount = 0;
    
        Object.entries(categoryCounts).forEach(([category, count]) => {
            if (count > maxCount) {
                maxCount = count;
                maxCategory = category;
            }
        });
        setTes((prev) => ({
            ...prev,
            tipeKecerdasan : maxCategory
        }))
        
    };

    const nisList = [
        {value:'----', text:'--Choose NIS--'},
        ...Object.keys(siswa)?.map((key) => ({
            value: siswa[key]?.nis,
            text: siswa[key].nis,
            nama:siswa[key].nama
          })) 
    ];
    const [ADD_TES] = useMutation(addTes, {
        refetchQueries:[getTes]
    })
    console.log(tes);
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(nis !== '' && nama !== '' && tglTes !== '' ){
            await ADD_TES({
                variables:{
                    object:{
                        nis:searchNis,
                        nama:firstSiswa?.nama,
                        tglTes:tes.tglTes,
                        tipeKecerdasan:tes.tipeKecerdasan,
                        prodi: tes.prodi
                    }
                }
            })
            navigate(
             '/tipeKecerdasan',{
                 state:{
                     tipeKecerdasan : tes.tipeKecerdasan,
                     nis:searchNis,
                     nama:firstSiswa?.nama,
                     tglTes:tes.tglTes,
                     prodi:tes.prodi
                 }
             }
            )
        }
    };
    
    
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
            <div style={{backgroundColor:'var(--primary)'}} className="col-12">
                <form onSubmit={handleSubmit}>
                    <div className="container pt-3 col-10 col-lg-6">
                        <Judul
                            text={'Tes Kecerdasan'}
                        />            
                        <div className="mb-3">
                            <table>
                                <tr>
                                    <td ><label className="mb-2 text-white " htmlFor="">NIS</label></td>
                                    <td></td>
                                    <td>
                                        <input 
                                        className="ms-3 mb-2 form-control " 
                                        type="text" 
                                        name="nis" 
                                        id="nis" 
                                        value={searchNis}
                                        onChange={(e)=>setSearchNis(e.target.value)}
                                        // onChange={(e) => {
                                        //     setTes((prev) => ({
                                        //         ...prev,
                                        //         nis : e.target.value,
                                        //     }))
                                        // }}
                                        // value={tes.nis}
                                    />
                                    {!loadingSiswa && searchNis && dataSiswa?.siswa.length === 0 && (
                                        <small className="text-danger">Siswa dengan NIS {searchNis} tidak ditemukan.</small>
                                    )}

                                    {/* <select 
                                        id={'nis'}  
                                        className={'form-control ms-3 mb-2 '}
                                        name={'nis'} 
                                        onChange={(e) => {
                                            const selectedNis = e.target.value;
                                            const selectedNama = nisList.find(option => option.value === selectedNis)?.nama || '';
                                            
                                            setTes((prev) => ({
                                                ...prev,
                                                nis: selectedNis,
                                                nama: selectedNama,
                                            }));
                                          }}
                                    >
                                        {
                                            nisList?.map(option => (
                                                <option 
                                                key={option.value}
                                                value={option.value}
                                                >
                                                    {option.text}
                                                </option>
                                            ))
                                        }
                                    </select> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className="text-white" htmlFor="">Nama</label></td>
                                    <td></td>
                                    <td>
                                        <input 
                                            className="ms-3 form-control mb-2" 
                                            type="text" 
                                            name="nama" 
                                            id="nama"
                                            disabled
                                            value={firstSiswa?.nama || ''}
                                        /> 
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className="text-white" htmlFor="">Tanggal Tes</label></td>
                                    <td></td>
                                    <td>
                                        <input 
                                        className="ms-3 form-control" 
                                        type="text" 
                                        disabled
                                        name="tglTes" 
                                        id="tglTes" 
                                        onChange={(e) => {
                                            setTes((prev) => ({
                                                ...prev,
                                                tglTes :tanggal,
                                            }))
                                        }}
                                        value={tanggal.toISOString().substr(0, 10)}
                                    />
                                    </td>
                                </tr>
                            </table>

                        </div>

                        <div className="p-2" style={{backgroundColor:'var(--secondary)'}}>
                            <label htmlFor="">
                                Silahkan pilih pernyataan yang paling sesuai dengan anda!
                            </label>
                            {
                                loading?
                                <p>loading...</p>
                                :
                                data?.soal?.map((item)=>
                                    <div key={item.id} className={`form-check`}>
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            checked={kinestetik[item.soal]}
                                            name={item.soal}
                                            value={tes.tipeKecerdasan}
                                            onChange={(e)=>handleCheckboxChange({
                                                tipe :item.tipeKecerdasan, 
                                                itemName : item.soal,
                                                isChecked: e.target.checked})}
                                        />
                                        <label 
                                            className="form-check-label" 
                                            htmlFor={item.soal}
                                        >
                                            {item.soal}
                                        </label>
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <Button
                                className={'ms-2 mb-3 mt-3'}
                                text={'Selesai'}
                                type={'submit'}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TesKecerdasan;