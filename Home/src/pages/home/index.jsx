import Layout from "../../components/layout/Layout"
import home from "../../../public/home.png"
export default function Home() {
  return (
    <div className="">
       <Layout>
        <div className="">
          <img src={home} alt="" />
          <div className="text-[#0369A1] text-[70px] font-bold text-center">
          Desa adalah sebuah komunitas yang kaya akan potensi 
alam, budaya dan sumber daya manusia
          </div>
          <div className="text-center text-[20px] font-medium mt-4">
          Struktur Pemerintahan Desa
          </div>
        </div>
       </Layout>
    </div>
  )
}
