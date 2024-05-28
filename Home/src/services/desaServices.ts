import { Agenda } from '../interfaces/agenda';
import { Anggaran } from '../interfaces/anggaran';
import { Bantuan } from '../interfaces/bantuan';
import { Berita } from '../interfaces/berita';
import { Dusun } from '../interfaces/dusun';
import { Tugas } from '../interfaces/jabatan';
import { Laporan } from '../interfaces/laporan';
import { Organisasi } from '../interfaces/organisasi';
import { Pemerintah } from '../interfaces/pemerintah';
import { PendudukDesa } from '../interfaces/penduduk';
import { Penerima } from '../interfaces/penerimaBantuan';
import { Pengumuman } from '../interfaces/pengumuman';
import { Profil } from '../interfaces/profil';

// const API_URL = 'https://desa-digital-bakend-jf9ckkwwo-seccret404s-projects.vercel.app/api';
// const API_URL = 'http://localhost:3000/api';
const API_URL = 'https://desa-digital-bakend-production.up.railway.app/api';



// GET API
//
export const getDusun = async (): Promise<Dusun[]> =>{
  try {
    const response = await fetch(`${API_URL}/dusun`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Dusun[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data dusun');
  }
};

export const getAnggaran = async (): Promise<Anggaran[]> =>{
  try {
    const response = await fetch(`${API_URL}/anggaran`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Anggaran[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data anggaran');
  }
};

export const getBerita = async (): Promise<Berita[]> =>{
  try{
    const response = await fetch(`${API_URL}/berita`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Berita[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
}
export const getProfil = async (): Promise<Profil[]> => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data as Profil[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data profil');
  }
};
export const getLaporanAgenda = async (): Promise<Laporan[]> =>{
  try{
    const response = await fetch(`${API_URL}/agenda/laporan`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Laporan[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
}
export const getPengumuman = async (): Promise<Pengumuman[]> =>{
  try{
    const response = await fetch(`${API_URL}/pengumuman`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Pengumuman[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data pengumuman');
  }
}

export const getPemerintah = async (): Promise<Pemerintah[]> =>{
  try{
    const response = await fetch(`${API_URL}/pemerintah`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Pemerintah[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data pemerintah');
  }
}

export const getPenduduk = async (): Promise<PendudukDesa[]> =>{
  try{
    const response = await  fetch(`${API_URL}/penduduk`,{
      headers: {
        'Origin': 'http://localhost:3000'
      }
    }); if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as PendudukDesa[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data dusun');
  }
}
export const getBantuan = async (): Promise<Bantuan[]> =>{
  try{
    const response = await  fetch(`${API_URL}/bantuan`,{
      headers: {
        'Origin': 'http://localhost:3000'
      }
    }); if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Bantuan[];
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data bantuan');
  }
}

export const getOrganisasi = async(): Promise<Organisasi[]> =>{
  try{
    const response = await  fetch(`${API_URL}/organisasi`,{
    headers: {
      'Origin': 'http://localhost:3000'
    }
  }); if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as Organisasi[];
} catch (error) {
  console.error('Error:', error);
  throw new Error('Gagal mendapatkan data organisasi');
}
}

export const getAgenda = async(): Promise<Agenda[]> =>{
  try{
    const response = await  fetch(`${API_URL}/agenda`,{
    headers: {
      'Origin': 'http://localhost:3000'
    }
  }); if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as Agenda[];
} catch (error) {
  console.error('Error:', error);
  throw new Error('Gagal mendapatkan data organisasi');
}


}
export const getTugas = async(): Promise<Tugas[]> =>{
  try{
    const response = await  fetch(`${API_URL}/tugas`,{
    headers: {
      'Origin': 'http://localhost:3000'
    }
  }); if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as Tugas[];
} catch (error) {
  console.error('Error:', error);
  throw new Error('Gagal mendapatkan data tugas');
}
}

export const getPenerimaBantuan = async(): Promise<Penerima[]> =>{
  try{
    const response = await  fetch(`${API_URL}/penerima-bantuan`,{
    headers: {
      'Origin': 'http://localhost:3000'
    }
  }); if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as Penerima[];
} catch (error) {
  console.error('Error:', error);
  throw new Error('Gagal mendapatkan data organisasi');
}

}

//
//get bY ID
//
export const getPendudukById = async (id: string): Promise<PendudukDesa> => {
  try {
    const response = await fetch(`${API_URL}/penduduk/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as PendudukDesa;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data penduduk');
  }
};
export const getAnggaranById = async (id: string): Promise<Anggaran> => {
  try {
    const response = await fetch(`${API_URL}/anggaran/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Anggaran;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data anggaran');
  }
};

export const getBeritaById= async (id: string): Promise<Berita> => {
  try {
    const response = await fetch(`${API_URL}/berita/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Berita;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
};
export const getOrganisasiById= async (id: string): Promise<Organisasi> => {
  try {
    const response = await fetch(`${API_URL}/organisasi/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Organisasi;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
};
export const getProfilById= async (id: string): Promise<Profil> => {
  try {
    const response = await fetch(`${API_URL}/profile/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Profil;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
};
export const getPengumumanById= async (id: string): Promise<Pengumuman> => {
  try {
    const response = await fetch(`${API_URL}/pengumuman/${id}`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Pengumuman;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data berita');
  }
};

export const getDusunById = async(id: string): Promise<Dusun> =>{
  try{
    const response = await fetch(`${API_URL}/dusun/${id}`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if(!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Dusun;
  }catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data dusun');
  }
}
export const getAgendaById = async(id: string): Promise<Agenda> =>{
  try{
    const response = await fetch(`${API_URL}/agenda/${id}`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if(!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Agenda;
  }catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data agenda');
  }
}
export const getLaporanById = async(id_agenda: string): Promise<Laporan> =>{
  try{
    const response = await fetch(`${API_URL}/agenda/laporan/${id_agenda}`,{
      headers:{
        'Origin': 'http://localhost:3000'
      }
    });
    if(!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data as Laporan;
  }catch (error) {
    console.error('Error:', error);
    throw new Error('Gagal mendapatkan data laporan agenda');
  }
}
