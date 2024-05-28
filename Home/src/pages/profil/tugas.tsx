import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { getPemerintah, getProfil, getTugas } from '../../services/desaServices';
import { Pemerintah } from '../../interfaces/pemerintah';
import { Tugas } from '../../interfaces/jabatan';
import { Profil } from '../../interfaces/profil';

export default function TugasPage() {
    const [pemerintah, setPemerintah] = useState<Pemerintah[]>([]);
    const [tugas, setTugas] = useState<Tugas[]>([]);
    const [selectedJabatan, setSelectedJabatan] = useState<string>('Kepala Desa');
    const [selectedTugas, setSelectedTugas] = useState<Tugas | null>(null);
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

    useEffect(() => {
        async function fetchData() {
            try {
                const pemerintahData = await getPemerintah();
                setPemerintah(pemerintahData);

                const tugasData = await getTugas();
                setTugas(tugasData);

                const defaultTugas = tugasData.find(t => t.jabatan === 'Kepala Desa');
                setSelectedTugas(defaultTugas || null);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedJabatan) {
            const tugasForJabatan = tugas.find(t => t.jabatan === selectedJabatan);
            setSelectedTugas(tugasForJabatan || null);
        }
    }, [selectedJabatan, tugas]);

    return (
        <div className="bg-[#F8F2F2]">
            <Layout>
                <div className="bg-gradient-to-r from-orange-500 to-orange-900 text-white text-[20px] p-2 rounded-[5px] ml-[56px] mr-[56px] mt-[27px]">
                    Struktur Pemerintahan
                </div>
                <div className="text-center font-bold text-[24px] flex justify-center">
                    <div className="w-[600px]">
                        Tugas, Wewenang, dan Fungsi Pemerintahan {profil?.nama_desa}
                    </div>
                </div>
                <div className="bg-[#ffffff] p-4 ml-[50px] mr-[50px] rounded-[10px]">
                    
                    <select
                        className="bg-[#E9871D] w-[200px] rounded-[17px] ml-[px] text-white  p-2 "
                        onChange={(e) => setSelectedJabatan(e.target.value)}
                        value={selectedJabatan || ''}
                    >
                        <option value="" disabled>Select Jabatan</option>
                        {pemerintah.map(p => (
                            <option key={p.id} value={p.jabatan}>
                                {p.jabatan}
                            </option>
                        ))}
                    </select>
                    {selectedTugas && (
                        <div className="mt-4 p-4">
                            <div className="text-[20px] font-bold">Tugas Pokok: {selectedTugas.jabatan}</div>
                            <div className="text-justify text-[16px] mt-2" dangerouslySetInnerHTML={{ __html: selectedTugas.tugas }}></div>
                            <div className="text-[20px] font-bold mt-4">Fungsi Pokok: {selectedTugas.jabatan}</div>
                            <div className="text-justify text-[16px] mt-2" dangerouslySetInnerHTML={{ __html: selectedTugas.fungsi }}></div>
                            <div className="text-[20px] font-bold mt-4">Wewenang Pokok: {selectedTugas.jabatan}</div>
                            <div className="text-justify text-[16px] mt-2" dangerouslySetInnerHTML={{ __html: selectedTugas.wewenang }}></div>
                        </div>
                    )}
                </div>
            </Layout>
        </div>
    );
}
