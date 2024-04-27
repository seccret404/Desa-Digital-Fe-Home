import Layout from "../../components/layout/Layout";
import slide from '../../assets/slider.png';
import pemerintah from '../../assets/pemerintah.png'
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
import rapat from '../../assets/rapat.png'
import CalenderICon from "../../components/icon/calenderIcon";

export default function Home() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    captionWidth: 300,

  };

  return (
    <div className="bg-[#F8F2F2]">
      <Layout>
        <div className="ml-[90px] mr-[90px]">
          {/* slider */}
          <div className="bg-[#0D9276] bg-opacity-20 mt-[13px] rounded-[5px]">
            <div className="p-4">
              <div className="container p-4">
                <Slider {...settings}>
                  <div className="pl-4 pr-4">
                    <img src={slide}  alt="Credit to Joshua Earle on Unsplash" className="w-full"/>
                    <div className="text-center bg-[#E9871D]  text-white p-1 ">Caption untuk gambar 1</div>
                  </div>
                  <div className="pl-4 pr-4">
                    <img src={slide}  alt="Credit to Joshua Earle on Unsplash" className="w-full" />
                    <div className="text-center bg-[#E9871D]  text-white p-1 ">Caption untuk gambar 1</div>
                  </div>
                  <div className="pl-4 pr-4">
                    <img src={slide}  alt="Credit to Joshua Earle on Unsplash" className="w-full" />
                    <div className="text-center bg-[#E9871D]  text-white p-1 ">Caption untuk gambar 1</div>
                  </div>
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
                <div className="bg-white shadow w-[205px] h-[307px] flex flex-col  items-center">
                  <div className="mt-3">
                    <img src={pemerintah} className="rounded-[10px]" />
                  </div>
                  <div className="text-[18px] font-medium mt-[16px]">Exaudi Siregar</div>
                  <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kepala Desa</div>
                </div>
                <div className="bg-white shadow w-[205px] h-[307px] flex flex-col  items-center">
                  <div className="mt-3">
                    <img src={pemerintah} className="rounded-[10px]" />
                  </div>
                  <div className="text-[18px] font-medium mt-[16px]">Exaudi Siregar</div>
                  <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kepala Desa</div>
                </div>
                <div className="bg-white shadow w-[205px] h-[307px] flex flex-col  items-center">
                  <div className="mt-3">
                    <img src={pemerintah} className="rounded-[10px]" />
                  </div>
                  <div className="text-[18px] font-medium mt-[16px]">Exaudi Siregar</div>
                  <div className="bg-[#0369A1] text-white w-full text-center text-[14px] pt-1 pb-1">Kepala Desa</div>
                </div>
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
                      <div className="bg-[#E9871D] text-white text-center rounded-[7px] w-[162px] p-2">120 Jiwa</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <ManIcon size={170} />
                      <div className="text-[20px] font-medium">Laki-laki</div>
                      <div className="bg-[#0890EA] text-white text-center rounded-[7px] w-[162px] p-2">120 Jiwa</div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="text-[20px] font-medium">Filter</div>
                  <div className="bg-[#0369A1] bg-opacity-20 p-2 grid grid-cols-2 gap-9 rounded-[10px] font-medium">
                    <Link>
                      <div className="bg-[#0369A1] flex items-center rounded-[5px] w-[206px] hover:opacity-80 ">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><PendidikanICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Pendidikan</div>
                      </div>
                    </Link>
                    <Link>
                      <div className="bg-[#0D9276] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><OldICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Usia</div>
                      </div>
                    </Link>
                    <Link>
                      <div className="bg-[#E9871D] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><JobICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Pekerjaan</div>
                      </div>
                    </Link>
                    <Link>
                      <div className="bg-[#FFFFFF] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-[#0D9276] w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><ReliICon height={39} width={29} /></div>
                        <div className="text-[#0D9276] text-[20px] p-2 w-[149px]">Agama</div>
                      </div>
                    </Link>
                    <Link>
                      <div className="bg-[#E13A3A] flex items-center rounded-[5px] w-[206px] hover:opacity-80">
                        <div className="bg-white w-[50px] p-2 rounded-tl-[5px] rounded-bl-[5px] flex justify-center"><LoveICon height={39} width={29} /></div>
                        <div className="text-white text-[20px] p-2 w-[149px]">Perkawinan</div>
                      </div>
                    </Link>
                    <Link>
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
                <div className="bg-white shadow w-[499px] mt-8">
                  <div className="flex p-2">
                    <img src={rapat} alt="" width={139} height={118} />
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2">
                        Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow w-[499px] mt-8">
                  <div className="flex p-2">
                    <img src={rapat} alt="" width={139} height={118} />
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2">
                        Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-white bg-[#0369A1] w-[230px] rounded-[5px] p-2 text-[18px] text-center shadow">Pengumuman</div>
                <div className="bg-white shadow w-[499px] mt-8">
                  <div className="flex p-2">
                    <img src={rapat} alt="" width={139} height={118} />
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2">
                        Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow w-[499px] mt-8">
                  <div className="flex p-2">
                    <img src={rapat} alt="" width={139} height={118} />
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2">
                        Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end-informasi publik */}
            {/* Agenda Desa */}
            <div className="bg-[#0369A1] text-center mt-5 p-4 text-[20px] text-white font-medium">Agenda Desa</div>
            <div className=" ml-[36px] mr-[36px]">
              <div className="grid grid-cols-2">
                <div className="bg-white shadow w-[499px] mt-8"> {/*card*/}
                  <div className="p-2">
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2">
                        Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow w-[499px] mt-8"> {/*card*/}
                  <div className="p-2">
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2">
                        Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow w-[499px] mt-8"> {/*card*/}
                  <div className="p-2">
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2">
                        Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow w-[499px] mt-8"> {/*card*/}
                  <div className="p-2">
                    <div className="ml-2">
                      <div className="text-[18px] font-medium text-black">Penyerahan Penerima Banuan Sosial</div>
                      <div className="flex items-center">
                        <CalenderICon size={28} />
                        <div className="text-12">Rabu, 17 April 2024 - Kantor Kepala Desa</div>
                      </div>
                      <div className="text-[12px] mt-2">
                        Penyerahan bantuan sosial kepaba maysrakat Desa Sosor Dolok pada hari Rabu, 17 April 2024 di kantor Kepala Desa Sosor..
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start mt-4 ">
                <Link><div className="text-white bg-[#E9871D] hover:opacity-80 transition-colors duration-300 w-[230px] rounded-[5px] p-1.5 text-[14px] text-center shadow">Lihat Selengkapnya</div></Link>
              </div>
            </div>



            {/* end-Agenda Desa */}
            {/* profil Desa */}
            <div className="bg-[#0369A1] text-center mt-5 p-4 text-[20px] text-white font-medium">Profil Desa</div>
            <div className=" ml-[36px] mr-[36px] mt-4 pb-4">
              <div className="text-black text-[24px] font-medium uderline w-[118px]">
                Profil Desa
                <div className="bg-[#0369A1] h-1"></div>
              </div>
              <div className="text-justify">
                Desa Sosor Dolok terletak di daerah dataran tinggi, menawarkan pemandangan alam yang menakjubkan dengan latar belakang pegunungan yang megah dan udara yang sejuk. Desa ini terkenal dengan kebun teh yang membentang luas, menciptakan panorama hijau yang menyejukkan mata. Penduduk desa yang mayoritas adalah petani teh, menjalani hidup dengan ritme yang tenang dan penuh kesederhanaan, jauh dari hiruk-pikuk kota.
                Keunikan Desa Sosor Dolok tidak hanya terletak pada keindahan alamnya, tetapi juga pada kekayaan budayanya. Warga desa masih memegang teguh adat istiadat dan tradisi yang turun-temurun, termasuk upacara-upacara yang berkaitan dengan pertanian dan kepercayaan lokal. Di sini, pengunjung dapat menyaksikan langsung berbagai festival budaya yang diadakan dengan penuh warna dan keceriaan. Selain itu, keramahan penduduk lokal menjadikan setiap pengalaman kunjungan menjadi lebih berkesan dan autentik.
              </div>
              <div className="flex">
                <div className="">
                  <div className="text-black text-[24px] font-medium uderline w-[41px] mt-2">
                    Visi
                    <div className="bg-[#0369A1] h-1"></div>
                  </div>
                  <div className="text-justify">
                    Visi Desa Sosor Dolok adalah menjadi desa wisata yang berkelanjutan, yang memadukan kearifan lokal dengan inovasi modern untuk mewujudkan kesejahteraan dan kebahagiaan bagi seluruh warganya serta memberikan pengalaman yang unik dan berkesan bagi para pengunjung.
                  </div>

                  <div className="text-black text-[24px] font-medium uderline w-[44px] mt-2">
                    Misi
                    <div className="bg-[#0369A1] h-1"></div>
                  </div>
                  <div className="text-justify">
                    Visi Desa Sosor Dolok adalah menjadi desa wisata yang berkelanjutan, yang memadukan kearifan lokal dengan inovasi modern untuk mewujudkan kesejahteraan dan kebahagiaan bagi seluruh warganya serta memberikan pengalaman yang unik dan berkesan bagi para pengunjung.
                  </div>
                </div>
                <div className="p-4">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31887.264160649553!2d98.61863630425401!3d2.536889786251211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031d0933c31e0a5%3A0xdb7c1c2489e8d729!2sSosor%20Dolok%2C%20Kec.%20Harian%2C%20Kabupaten%20Samosir%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1713770166453!5m2!1sid!2sid"
                    width="400"
                    height="450"
                    className="border-0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

              </div>

            </div>
            {/* end-profil Desa */}

          </div>




        </div>
      </Layout>
    </div>
  );
}
