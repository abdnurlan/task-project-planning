import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-[url('/images/HomeBackground.svg')] relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-10 flex w-full px-8">
        <div className="flex flex-row items-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-[350px] h-[150px] bg-[#41434ACC] text-white rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-[#41434ACC] border border-white"
          >
            <span className="material-icons">
              <img src="/icons/Planning.svg" alt="Planning" />
            </span>
            <span>PLANLAMA</span>
          </button>
        </div>
        <div className="flex flex-col items-end ml-auto text-right gap-4">
          <h1 className="text-[80px] font-bold leading-[40px] tracking-normal uppercase font-['Helvetica_Neue'] text-white">
            DAĞ-MƏDƏN
          </h1>
          <p className="text-[24px]  leading-[40px] tracking-normal font-['Helvetica_Neue'] text-[#FFFFB8]">
            Əməliyyatlarına Nəzarət və İdarəetmə Mərkəzi
          </p>
        </div>
      </div>
    </div>
  );
}
