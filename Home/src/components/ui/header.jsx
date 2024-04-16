import React, { useState } from 'react';

const Header = () => {
  const [showPemerintahanDropdown, setShowPemerintahanDropdown] = useState(false);
  const [showInformasiPublikDropdown, setShowInformasiPublikDropdown] = useState(false);
  const [showDataDesaDropdown, setShowDataDesaDropdown] = useState(false);
  const [showLembagaMasyarakatDropdown, setShowLembagaMasyarakatDropdown] = useState(false);

  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto">
        <nav>
          <ul className="flex space-x-6">
            <li className="flex-1">
              <a href="#" className="text-white font-semibold hover:text-gray-300 block text-center">Beranda</a>
            </li>
            <li className="dropdown relative flex-1">
              <button 
                className="text-white font-semibold focus:outline-none w-full"
                onClick={() => setShowPemerintahanDropdown(!showPemerintahanDropdown)}
              >
                Pemerintahan
              </button>
              <div className={`dropdown-menu absolute ${showPemerintahanDropdown ? '' : 'hidden'} bg-white py-2 rounded-md shadow-lg w-full`}>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Visi Misi</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 3</a>
              </div>
            </li>
            <li className="dropdown relative flex-1">
              <button 
                className="text-white font-semibold focus:outline-none w-full"
                onClick={() => setShowInformasiPublikDropdown(!showInformasiPublikDropdown)}
              >
                Informasi Publik
              </button>
              <div className={`dropdown-menu absolute ${showInformasiPublikDropdown ? '' : 'hidden'} bg-white py-2 rounded-md shadow-lg w-full`}>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 3</a>
              </div>
            </li>
            <li className="dropdown relative flex-1">
              <button 
                className="text-white font-semibold focus:outline-none w-full"
                onClick={() => setShowDataDesaDropdown(!showDataDesaDropdown)}
              >
                Data Desa
              </button>
              <div className={`dropdown-menu absolute ${showDataDesaDropdown ? '' : 'hidden'} bg-white py-2 rounded-md shadow-lg w-full`}>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 3</a>
              </div>
            </li>
            <li className="dropdown relative flex-1">
              <button 
                className="text-white font-semibold focus:outline-none w-full"
                onClick={() => setShowLembagaMasyarakatDropdown(!showLembagaMasyarakatDropdown)}
              >
                Lembaga Masyarakat
              </button>
              <div className={`dropdown-menu absolute ${showLembagaMasyarakatDropdown ? '' : 'hidden'} bg-white py-2 rounded-md shadow-lg w-full`}>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Submenu 3</a>
              </div>
            </li>
            <li className="flex-1">
              <button className="text-white font-semibold focus:outline-none w-full block text-center">Fitur Potensi Desa</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};



export default Header;
