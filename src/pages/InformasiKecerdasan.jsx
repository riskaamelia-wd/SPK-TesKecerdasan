import { Link } from "react-router-dom"
import Button from "../elements/Button"

const InformasiKecerdasan = () => {
    return (
        <div className="col-12" style={{backgroundColor:'var(--primary)'}}>
            <div className="col-10 m-auto p-3">
                <h2 className="text-white mt-3 mb-4">Informasi Kecerdasan</h2>
                <div className="p-2 mb-3 me-5" style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan Linguistic Verbal adalah kemampuan individu terkait dengan penggunaan kata-kata secara lisan maupun tulisan untuk mengungkapkan pemikiran yanng dimilikinya.
                    <br />Cara mengembangkan: membaca dengan lantang, bermain peran, dan menulis blog atau jurnal</span>
                </div>

                <div className="p-2 mb-3 ms-5 " style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan Logis Matematis adalah kecerdasan yang terkait dengan kemampuan dalam penggunaan bilangan dan logika secara efektif. Kecerdasan ini memiliki keterkaitan dengan kemampuan polalogika, abstraksi, kategorisasi, dan perhitungan. <br />Cara mengembangkan: bermain puzzle, bermain game logika angka</span>
                </div>

                <div className="p-2 mb-3 me-5" style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan Spasial Visual adalah gambaran kemampuan individu dalam menangkap ruang visual secara tepat. Terkait dengan kemampuan memgenal benda, membaca suatu grafik dengan tepat.<br />Cara mengembangkan: menggambar atau melukis, latihan membaca peta, dan membuat kerajinan.</span>
                </div>
            
                <div className="p-2 mb-3 ms-5" style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan Ritmik Musikal adalah kecerdasan dalam hal kemampuan mengembangkan dan mengekspresikan bentuk-bentuk musik dan suara, peka terhadap ritme, melodi, intonasi, dan kemampuan untuk memainkan alat musik, kemampuan bernyanyi serta menikmati musik atau lagu.<br />Cara mengembangkan: melihat pertunjukan seni, mendengarkan musik instrumentalia, dan ikut kursus musik.</span>
                </div>

                <div className="p-2 mb-3 me-5" style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan kinestetik adalah Kemampuan individu dalam hal koordinasi penggunaan bagian-bagian atau seluruh  tubuhnya perihal proses komunikasi dan pemecahan masalah. Merupakan kemampuan untuk mengungkapkan diri dengan penggunaan gerak tubuh.<br />Cara mengembangkan:  menari, olahraga, melakukan eksperimen, dan menulis</span>
                </div>

                <div className="p-2 mb-3 ms-5" style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan Interpersonal adalah kecerdasan yang berkaitan dengan kemampuan seseorang untuk mengerti dan mampu merespons stimulus berupa perasaan motivasi, watak, temperamen, ekspresi wajah, suara dan isyarat dari orang lain. Intinya adalah bagaimana  seorang individu mampu untuk menjalin relasi dan komunikasi dengan orang lain.<br />Cara mengembangkan: melatih diri untuk dapat berkomunikasi dengan orang lain, dan bermain peran.</span>
                </div>

                <div className="p-2 mb-3 me-5" style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan Intrapersonal adalah kemampuan untuk mengenal diri serta mampu berperilaku adaptif berdasarkan pengenalan diri. Bentuk dari kecerdasan ini adalah kemampuan keseimbangan diri, kesadaran diri, kemampuan mengambil keputusan pribadi, sadar akan tujuan hidup dan kontrol emosi.<br />Cara mengembangkan: mengikuti kegiatan sosial, menulis buku harian, dan membaca buku.</span>
                </div>

                <div className="p-2 mb-3 ms-5" style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan Naturalis adalah kemampuan untuk memahami lingkungan berupa tumbuhan dan binatang dengan baik dapat memahami dan menikmati alam, keterkaitan juga dengan kemampuan dan menggunakan secara produktif untuk bercocok tanam, berburu dan pengembangan pengetahuan alam.<br />Cara mengembangkan: pelihara hewan, mempelajari dunia fauna atau flora, dan mempelajari fenomena alam</span>
                </div>

                <div className="p-2 mb-3 me-5" style={{backgroundColor:'var(--secondary)'}}>
                    <span>Kecerdasan Eksistensial adalah kemampuan seseorang untuk menjawab dan menemukan solusi dari persoalan-persoalan terdalam mengenai keberadaan atau eksistensi makhluk hidup.<br />Cara mengembangkan: membaca buku filosofi, dan berdiskusi dengan orang lain yang memiliki minat yang sama.</span>
                </div>
            
                <div className="d-flex justify-content-end mt-4">
                    <Link className="me-4 btn btn-primary" to={'/tesKecerdasan'}>
                        Mulai Tes
                    </Link>
                    <Link className="btn btn-primary" to={'/menuUtama'}>
                        Keluar
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InformasiKecerdasan