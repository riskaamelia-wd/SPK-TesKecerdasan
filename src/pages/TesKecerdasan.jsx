import { useQuery } from "@apollo/client";
import { Navbar } from "../components/Navbar";
import Button from "../elements/Button";
import CheckBox from "../elements/CheckBox";
import Judul from "../elements/Judul";
import { getSoal } from "../graphql/query";
import { useEffect, useState } from "react";

const TesKecerdasan = () => {
    const {data, loading, error} = useQuery(getSoal)
    const [soal, setSoal] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        if(!loading && !error){
            setSoal(data?.soal)
        }
    }, [loading])
    // const handleCheckboxChange = (itemId) => {
    //     // Lakukan perubahan status checkbox di state
    //     const updatedItems = data?.soal?.map(item => {
    //       if (item.id === itemId) {
    //         return { ...item, checked: !item.tipeKecerdasan };
    //       }
    //       return item;
    //     });
    //     console.log(items);
    //     setItems(updatedItems);
    // }
    const handleCheckboxChange = () => {
        const item = e.target.name
        const isChe = e.target.value
        setItems(prev => ({...items, prev : isChe}))
      };
      console.log(items, ' items');
      
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
                <div className="container pt-3 col-10 col-lg-6">
                    <Judul
                        text={'Tes Kecerdasan'}
                    />            
                    <div className="mb-3">
                        <table>
                            <tr>
                                <td><label className="text-white" htmlFor="">ID Siswa</label></td>
                                <td></td>
                                <td>
                                    <input 
                                    className="ms-3 form-control mb-2" 
                                    type="text" 
                                    name="idSiswa" 
                                    id="idSiswa" />
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
                                    id="nama" />
                                </td>
                            </tr>
                            <tr>
                                <td><label className="text-white" htmlFor="">Tanggal Tes</label></td>
                                <td></td>
                                <td>
                                    <input 
                                    className="ms-3 form-control" 
                                    type="date" 
                                    name="tgl" 
                                    id="tgl" />
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
                                        // checked
                                        name={item.tipeKecerdasan}
                                        value={item.tipeKecerdasan}
                                        onChange={() => handleCheckboxChange}
                                        // id={id}
                                    />
                                    <label 
                                        className="form-check-label" 
                                        // htmlFor={htmlFor}
                                    >
                                        {item.soal}
                                    </label>
                                </div>
                            )
                        }
                        {/* <CheckBox
                            text={'Saya senang bercerita'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Memiliki ingatan yang baik'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Menyukai permainan kata'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Senang membaca buku'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        /> */}
                        {/* <CheckBox
                            text={'Lebih meyukai Bahasa inggris, ilmu sosial, sejarah daripada matematika dan ilmu alam'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'senang menulis segala hal yang berbentuk tulisan'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Sangat menyukai pelajaran matematika'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Menyukai permainan yang menggunakan logika, seperti teka-teki angka'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Senang mencari tahu bagaimana cara kerja setiap benda'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Senang menonton film atau membaca buku detektif'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Senang membuat eksperimen sederhana'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Menyenangkan bagi saya bekerja dengan angka dan data'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Lebih memilih peta daripada petunjuk tertulis'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Hobi dalam bidang fotografi'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Saya menikmati menggambar, melukis, dan mencoret-coret '}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Menyukai pelajaran geografi dan seni rupa daripada matematika'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Lebih mudah belajar dengan gambar daripada dengan teks'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Menikmati membaca lebih banyak ketika buku memiliki banyak gambar'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Senang mendengarkan musik dan radio '}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Cenderung bersenandung ketika sedang beraktivitas'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />                
                        <CheckBox
                            text={'Bisa memainkan alat musik '}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Mudah mengingat musik dan liriknya'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Suka mengarang lagu dan melodi saya sendiri'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Tahu kapan nada tidak tepat'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Olahraga merupakan suatu hobi'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />                
                        <CheckBox
                            text={'Tidak dapat duduk diam dalam waktu lama '}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Selalu menggunakan gerak tubuh atau bahasa tubuh ketika berbicara'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Menikmati kegiatan yang menantang bahaya '}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Suka pekerjaan yang melibatkan keterampilan tangan '}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Lebih suka aktivitas olahraga individu, seperti berenang, golf, atau balet'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />                
                        <CheckBox
                            text={'Senang berkumpul dan berorganisasi'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Mempunyai beberapa teman dekat'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Senang terlibat dalam kegiatan sosial'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Senang mengajak orang lain untuk bekerja sama'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Sering ditunjuk sebagai pemimpin'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />                
                        <CheckBox
                            text={'Nyaman ditengah keramaian'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Suka mengerjakan sesuatu sendirian tanpa ada gangguan orang lain'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Memiliki buku harian atau catatan pribadi'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Tidak suka keramaian'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Lebih memilih menghabiskan liburan sendirian daripada bersama teman'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />                
                        <CheckBox
                            text={'Terkadang berbicara pada diri sendiri'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Suka memikirkan banyak hal sebelum mengambil tindakan apapun'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Senang berkebun'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Mempunyai minat cukup besar pada alam, ekologi, tanaman atau binatang'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Mempunyai hewan peliharaan setidaknya dua jenis hewan'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />                
                        <CheckBox
                            text={'Suka berkelana, hiking, atau sekedar jalan-jalan di alam terbuka'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Sangat menyenangkan mengamati kebiasaan hewan dan mempelajarinya'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Sangat pandai menjaga tanaman tetap hidup dan sehat'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Menyukai pembahasan tentang kehidupan'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Agama adalah hal yang penting'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Suka mengunjungi situs alam'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Menikmati membaca filsuf kuno dan modern'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Hobi membaca buku sejarah'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        />
                        <CheckBox
                            text={'Mempunyai minat cukup besar dalam mempelajari sejarah'}
                            className={''}
                            value={''}
                            id={''}
                            htmlFor={''}
                        /> */}
                    </div>
                    <div>
                        <Button
                            className={'ms-2 mb-3 mt-3'}
                            text={'Selesai'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TesKecerdasan;