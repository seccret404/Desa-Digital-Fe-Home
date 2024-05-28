import Layout from "../../components/layout/Layout";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../../components/ui/button";
import WomanIcon from "../../components/icon/woman";
import ManIcon from "../../components/icon/manicon";
import PendidikanICon from "../../components/icon/pendidikanIcon";
import { Link } from "react-router-dom";
import OldICon from "../../components/icon/oldIcon";
import JobICon from "../../components/icon/jobsIcon";
import ReliICon from "../../components/icon/religiusIcon";
import LoveICon from "../../components/icon/loveIcon";
import DusunICon from "../../components/icon/dusunIcon";
import CalenderICon from "../../components/icon/calenderIcon";
import React,{ useEffect, useState } from "react";
import { getAgenda, getBerita, getPemerintah, getPenduduk, getPengumuman, getProfil } from "../../services/desaServices";
import { Berita } from "../../interfaces/berita";
import { PendudukDesa } from "../../interfaces/penduduk";
import { Pemerintah } from "../../interfaces/pemerintah";
import { Pengumuman } from "../../interfaces/pengumuman";
import { Agenda } from "../../interfaces/agenda";
import { Profil } from "../../interfaces/profil";
export default function Home() {
  const [berita, setBerita] = useState<Berita[]>([]);
const [penduduk,setPenduduk] = useState<PendudukDesa[]>([]);
const [totalMan, setTotalMan] = useState<number>(0);
const [totalWoman, setTotalWoman] = useState<number>(0);
const [pemerintah,setPemerintah] = useState<Pemerintah[]>([]);
const [kepdes, setkepdes] = useState<Pemerintah[]>([]);
const [sekdes, setSekdes] = useState<Pemerintah[]>([]);
const [bendahara, setbendahara] = useState<Pemerintah[]>([]);
const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);
const [agenda,setAgenda] = useState<Agenda[]>([]);
const [profile, setProfile] = useState<Profil[]>([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          async function fetchProfile() {
               try {
                    const data = await getProfil();
                    setProfile(data);
                    setLoading(false);
               } catch (error) {
                    if (error instanceof Error) {
                         console.error('error:', error.message);
                    } else {
                         console.error('An unexpected error occurred:', error);
                    }
                    setLoading(false);
               }
          }
          fetchProfile();
     }, []);


//penduduk
useEffect(() => {
  async function fetchPenduduk() {
      try {
          const data = await getPenduduk();
          setPenduduk(data);
          const totalM = data.filter(p => p.jenis_kelamin === 'Laki-laki').length;
          const totalW = data.filter(p => p.jenis_kelamin === 'Perempuan').length;

          setTotalMan(totalM);
          setTotalWoman(totalW);
      } catch (error) {
          if (error instanceof Error) {
              console.error('error:', error.message);
          } else {
              console.error('An unexpected error occurred:', error);
          }
      }
  }
  fetchPenduduk();
}, []);

//berita
  useEffect(() => {
    async function fetchBerita() {
      try {
        const data = await getBerita();
        const limaDataPertama = data.slice(0, 3);
        setBerita(limaDataPertama);
      } catch (error) {
        console.error('Error fetching berita:', error);
      }
    }
    fetchBerita();
  }, []);

  //agenda
  useEffect(() => {
    async function fetchAgenda() {
      try {
        const data = await getAgenda();
        const limaDataPertama = data.slice(0, 4);
        setAgenda(limaDataPertama);
      } catch (error) {
        console.error('Error fetching berita:', error);
      }
    }
    fetchAgenda();
  }, []);


//pengumuman
useEffect(() => {
  async function fetchPengumuman() {
    try {
      const data = await getPengumuman();
      const limaDataPertama = data.slice(0, 3);
      setPengumuman(limaDataPertama);
    } catch (error) {
      console.error('Error fetching berita:', error);
    }
  }
  fetchPengumuman();
}, []);
  //pemerintah
  useEffect(() =>{
    async function fetchPemerintah(){
      try{
        const data = await getPemerintah();
        const kp = data.filter(p => p.jabatan == "Kepala Desa")
        const sd = data.filter(p => p.jabatan == "Sekretaris Desa")
        const bd = data.filter(p => p.jabatan == "Kaur Keuangan")

        setkepdes(kp);
        setSekdes(sd);
        setbendahara(bd)
      }catch (error) {
        console.error('Error fetching pemerintah:', error);
      }

    }
    fetchPemerintah();
  },[])

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    captionWidth: 300,

  };

  const limitTextTo30Words = (text: string) => {
    const words = text.split(' ');
    if (words.length > 15) {
      return words.slice(0, 15).join(' ') + '...';
    }
    return text;
  };
  const limitTextToPengumuman = (text: string) => {
    const words = text.split(' ');
    if (words.length > 7) {
      return words.slice(0, 7).join(' ') + '...';
    }
    return text;
  };
  return (
    <div className="bg-[#F8F2F2]">
      <Layout>
        <div className="ml-[90px] mr-[90px]">
          {/* slider */}
          <div className="bg-[#0D927570] bg-opacity-20 mt-[13px] rounded-[5px]">
            <div className="p-4">
              <div className="container p-4">
                <Slider {...settings}>
                {berita.map((item, index) => (
          <div key={index} className="pl-4 pr-4">
            <img src={`https://desa-digital-bakend-production.up.railway.app/api/berita_cover/${item.cover}`}  alt={item.judul_berita} className="w-full h-[300px]" height={300} />
            <div className="text-center bg-[#0369A1] text-white p-1 ">
              {item.judul_berita}
            </div>
          </div>
        ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* end-slider */}

          <div className="bg-white rounded-[5px] mt-12 mb-10">
            <div className="pl-[29px] pr-[29px] pt-8 ">
              {/* pemerintahan */}
              <div className="flex items-center justify-between">
                <div className="text-black text-[24px] font-medium uderline w-[211px]">
                  Pemerintahan Desa
                  <div className="bg-[#0369A1] h-1"></div>
                </div>
                <div className="">
                  <Button color="white" bgColor="#E9871D" width={209} height={41} rounded={5}>
                    Lihat Selengkapnya
                  </Button>
                </div>

              </div>
              <div className="flex justify-between mt-8 ml-[100px] mr-[100px]">
              {kepdes.map((item, index) => (
          <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
            <div className="mt-3">
              <img src={''} alt={item.nama} className="rounded-[10px]" />
            </div>
            <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
            <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kepala Desa</div>
          </div>
        ))}
        {sekdes.map((item, index) => (
          <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
            <div className="mt-3">
              <img src={''} alt={item.nama} className="rounded-[10px]" />
            </div>
            <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
            <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Sekretaris Desa</div>
          </div>
        ))}
        {bendahara.map((item, index) => (
          <div key={index} className="bg-white shadow w-[205px] h-[307px] flex flex-col items-center">
            <div className="mt-3">
              <img src={''} alt={item.nama} className="rounded-[10px]" />
            </div>
            <div className="text-[18px] font-medium mt-[16px]">{item.nama}</div>
            <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Bendahara Desa</div>
          </div>
        ))}
              </div>
              {/* end-pemerintah */}

            </div>
            {/* data statistik */}
            <div className="bg-[#0369A1] text-center mt-5 p-4 text-[20px] text-white font-medium">Data Statistik</div>
            <div className="pl-[29px] pr-[29px]">
              <div className="flex justify-between">
                <div className="">
                  <div className="text-[20px] font-medium">Pesebaran Penduduk</div>
                  <div className="flex justify-between w-[449px]">
                    <div className="flex flex-col items-center">
                      <WomanIcon size={170} />
                      <div className="text-[20px] font-medium">Perempuan</div>
                      <div className="bg-[#E9871D] text-white text-center rounded-[7px] w-[162px] p-2">{totalWoman} Jiwa</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <ManIcon size={170} />
                      <div className="text-[20px] font-medium">Laki-laki</div>
                      <div className="bg-[#0890EA] text-white text-center rounded-[7px] w-[162px] p-2">{totalMan} Jiwa</div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="text-[20px] font-medium">Filter</div>
                  <div className="bg-[#0369A1] bg-opacity-20 p-2 grid grid-cols-2 gap-9 rounded-[10px] font-medium">
                    <Link to={""}>
                      <div className="bg-[#0369A1] flex items-center rounded-[5px] w-[206px] hover:opacity-80 ">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><PendidikanICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Pendidikan</div>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div className="bg-[#0D9276] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><OldICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Usia</div>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div className="bg-[#E9871D] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><JobICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Pekerjaan</div>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div className="bg-[#FFFFFF] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-[#0D9276] w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><ReliICon height={39} width={29} /></div>
                        <div className="text-[#0D9276] text-[20px] p-2 w-[149px]">Agama</div>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div className="bg-[#E13A3A] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><LoveICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Perkawinan</div>
                      </div>
                    </Link>
                    <Link to={""}>
                      <div className="bg-[#000000] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><DusunICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Dusun</div>
                      </div>
                    </Link>

                  </div>
                </div>

              </div>
            </div>
            {/* end-data statistik */}
            {/* informasi publik */}
            <div className="bg-[#0369A1] text-center mt-5 p-4 text-[20px] text-white font-medium">Data Statistik</div>
            <div className="flex justify-between ml-[36px] mr-[36px] mt-4">
              <div className="">
                <div className="text-white bg-[#E9871D] w-[230px] rounded-[5px] p-2 text-[18px] text-center shadow">Berita Desa</div>
                {berita.map((item,index) =>
                   <div className="bg-white shadow w-[499px] mt-8" key={item.id}>
                  <div className="flex p-2">
                    {/* <img src={'rapat'} alt="" width={139} height={118} /> */}
                    <div className="">
                    {item.cover && typeof item.cover === 'string' && (
                                                    item.cover.endsWith('.jpg') || item.cover.endsWith('.png') || item.cover.endsWith('.jpeg') ? (
                                                        <img src={`https://desa-digital-bakend-production.up.railway.app/api/berita_cover/${item.cover}`} alt="Cover Berita" className="w-20 h-auto" />
                                                    ) : (
                                                        <a href={`https://desa-digital-bakend-production.up.railway.app/api/berita_cover/${item.cover}`} target="_blank" rel="noopener noreferrer">{item.cover}</a>
                                                    )
                                                )}      
                    </div>
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">{item.judul_berita}</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">{new Date(item.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</div>
                      </div>
                      <div className="text-[12px] mt-2" dangerouslySetInnerHTML={{ __html: limitTextTo30Words(item.isi_berita) }}>
                  
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
              <div className="">
                <div className="text-white bg-[#0369A1] w-[230px] rounded-[5px] p-2 text-[18px] text-center shadow">Pengumuman</div>
                {pengumuman.map((item,index) =>
                <div className="bg-white shadow w-[499px] mt-8">
                  <div className="flex p-2">
                    <div className="">
                    {item.file_pengumuman && typeof item.file_pengumuman === 'string' && (
                                                    item.file_pengumuman.endsWith('.jpg') || item.file_pengumuman.endsWith('.png') || item.file_pengumuman.endsWith('.jpeg') ? (
                                                        <img src={`https://desa-digital-bakend-production.up.railway.app/api/pengumuman_cover/${item.file_pengumuman}`} alt="Cover Pengumuman" className="w-20 h-auto" />
                                                    ) : (
                                                        <a href={`https://desa-digital-bakend-production.up.railway.app/api/pengumuman_cover/${item.file_pengumuman}`} target="_blank" rel="noopener noreferrer">{item.file_pengumuman}</a>
                                                    )
                                                )}
                    </div>
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">{item.judul_pengumuman} </div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">{new Date(item.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })} - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2" dangerouslySetInnerHTML={{ __html: limitTextToPengumuman(item.deskripsi_pengumuman) }}>
                        
                      </div>
                    </div>
                  </div>
                </div>
                )}
                
              </div>
            </div>
            {/* end-informasi publik */}
            {/* Agenda Desa */}
            <div className="bg-[#0369A1] text-center mt-5 p-4 text-[20px] text-white font-medium">Agenda Desa</div>
            <div className=" ml-[36px] mr-[36px]">
              <div className="grid grid-cols-2">
                {agenda.map((item,index) =>
                 <div className="bg-white shadow w-[499px] mt-8" key={item.id}> {/*card*/}
                  <div className="p-2">
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black"> {item.nama_kegiatan}</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">{new Date(item.tanggal_kegiatan).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })} - {item.lokasi}</div>
                      </div>
                      <div className="text-[12px] mt-2" dangerouslySetInnerHTML={{ __html: limitTextToPengumuman(item.deskripsi_kegiatan) }}>
                       
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
              <div className="flex justify-start mt-4 ">
                <Link to={""}><div className="text-white bg-[#E9871D] hover:opacity-80 transition-colors duration-300 w-[230px] rounded-[5px] p-1.5 text-[14px] text-center shadow">Lihat Selengkapnya</div></Link>
              </div>
            </div>



            {/* end-Agenda Desa */}
            {/* profil Desa */}
            <div className="bg-[#0369A1] text-center mt-5 p-4 text-[20px] text-white font-medium">Profil Desa</div>
           
              {profile.map((item,index) =>
              <div className=" ml-[36px] mr-[36px] mt-4 pb-4">
              <div className="text-black text-[24px] font-medium uderline w-[118px]">
                Profil Desa
                <div className="bg-[#0369A1] h-1"></div>
              </div>
              <div className="text-justify" dangerouslySetInnerHTML={{ __html: limitTextToPengumuman(item.profil_singkat) }}>
                
              </div>
              <div className="flex justify-between">
                <div className="">
                  <div className="text-black text-[24px] font-medium uderline w-[41px] mt-2">
                    Visi
                    <div className="bg-[#0369A1] h-1"></div>
                  </div>
                  <div className="text-justify" dangerouslySetInnerHTML={{ __html: limitTextToPengumuman(item.visi_desa) }}>
                  </div>

                  <div className="text-black text-[24px] font-medium uderline w-[44px] mt-2">
                    Misi
                    <div className="bg-[#0369A1] h-1"></div>
                  </div>
                  <div className="text-justify" dangerouslySetInnerHTML={{ __html: limitTextToPengumuman(item.misi_desa) }}>
                  </div>
                </div>
                <div className="p-4">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31887.264160649553!2d98.61863630425401!3d2.536889786251211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031d0933c31e0a5%3A0xdb7c1c2489e8d729!2sSosor%20Dolok%2C%20Kec.%20Harian%2C%20Kabupaten%20Samosir%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1713770166453!5m2!1sid!2sid"
                    width="400"
                    height="450"
                    className="border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

              </div>

            </div>
              )} 
              
            {/* end-profil Desa */}

          </div>




        </div>
      </Layout>
    </div>
  );
}
