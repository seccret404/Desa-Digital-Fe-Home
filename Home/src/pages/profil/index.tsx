import CalIcon from "../../components/icon/calIcon";
import ManCheckIcon from "../../components/icon/manCheckIcon";
import MapIcon from "../../components/icon/mapIcon";
import PhoneIcon from "../../components/icon/phone";
import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/button";
import React, { useEffect, useState } from "react";
import { Profil } from "../../interfaces/profil";
import { getProfil } from "../../services/desaServices";

export default function ProfilPage() {
    const [profil, setProfil] = useState<Profil | null>(null);

    useEffect(() => {
        async function fetchProfil() {
            try {
                const data = await getProfil();
                setProfil(data[0]); // Assuming getProfil returns an array and we need the first item
            } catch (error) {
                console.error('Error fetching profil:', error);
            }
        }
        fetchProfil();
    }, []);

    if (!profil) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-[#F8F2F2]">
            <Layout>
                <div className="bg-white ml-[56px] mr-[56px] rounded-[10px]">
                    <div className="ml-[80px] mr-[90px] pt-10 mt-4 pb-10 mb-4 ">
                        <div className="flex justify-between">
                            <div>
                                <div className="text-[20px] font-bold">{profil.nama_desa}</div>
                                <div className="flex items-center mt-2">
                                    <MapIcon size={24} />
                                    <div className="ml-4">
                                        {profil.alamat_kantor}
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <Button bgColor="#E9871D" width={300} height={45} rounded={5} color="white">
                                        Struktur Pemerintahan Desa
                                    </Button>
                                </div>
                            </div>
                            <div>
                                {profil.gambar_desa && typeof profil.gambar_desa === 'string' && (
                                    <img src={`https://desa-digital-bakend-production.up.railway.app/api/profile/${profil.gambar_desa}`} alt="Desa" className="w-full h-auto rounded" />
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="text-black text-[24px] font-medium  w-[121px] mt-4">
                                Profil Desa
                                <div className="bg-[#0369A1] h-1"></div>
                            </div>
                            <div className="text-justify text-[14px]" dangerouslySetInnerHTML={{ __html: profil.profil_singkat }}>
                            </div>
                            <div className="text-black text-[24px] font-medium  w-[40px] mt-4">
                                Visi
                                <div className="bg-[#0369A1] h-1"></div>
                            </div>
                            <div className="text-justify text-[14px]" dangerouslySetInnerHTML={{ __html: profil.visi_desa }}>
                            </div>
                            <div className="text-black text-[24px] font-medium  w-[40px] mt-4">
                                Misi
                                <div className="bg-[#0369A1] h-1"></div>
                            </div>
                            <div className="text-justify text-[14px]" dangerouslySetInnerHTML={{ __html: profil.misi_desa }}>
                            </div>
                            <div className="text-center text-black text-[24px] font-medium mt-4">Peta Desa</div>
                            <div className="flex justify-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31887.264160649553!2d98.61863630425401!3d2.536889786251211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031d0933c31e0a5%3A0xdb7c1c2489e8d729!2sSosor%20Dolok%2C%20Kec.%20Harian%2C%20Kabupaten%20Samosir%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1713770166453!5m2!1sid!2sid"
                                    width="800"
                                    height="300"
                                    className="border-0"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="text-black text-[24px] font-medium  w-[140px] mt-4">
                                Sejarah Desa
                                <div className="bg-[#0369A1] h-1"></div>
                            </div>
                            <div className="text-justify text-[14px]" dangerouslySetInnerHTML={{ __html: profil.sejarah_desa }}>
                            </div>
                            <div className="text-black text-[24px] font-medium  w-[180px] mt-4">
                                Perbatasan Desa
                                <div className="bg-[#0369A1] h-1"></div>
                            </div>
                            <div className="flex justify-center mt-8">
                               <div className="border p-2 ">
                              <div className="flex justify-between w-[600px] border p-2">
                                   <div className="w-[300px] text-[18px] font-bold">Batas Barat</div>
                                   <div className="font-medium">{profil.batas_barat}</div>
                              </div>
                              <div className="flex justify-between w-[600px] border p-2">
                                   <div className="w-[350px] text-[18px] font-bold">Batas Timur</div>
                                   <div className="font-medium">{profil.batas_timur}</div>
                              </div>
                              <div className="flex justify-between w-[600px] border p-2">
                                   <div className="w-[300px] text-[18px] font-bold">Batas Selatan</div>
                                   <div className="font-medium">{profil.batas_selatan}</div>
                              </div>
                              <div className="flex justify-between w-[600px] border p-2">
                                   <div className="w-[300px] text-[18px] font-bold">Batas Utara</div>
                                   <div className="font-medium">{profil.batas_utara}</div>
                              </div>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
