import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("dashboard");

  return (
    <div className="w-[200px] bg-white text-black flex flex-col py-4 items-center border-r border-[#E3E3E3]">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center w-4 h-4"
      >
        <img
          src="/icons/ArrowBack.svg"
          alt="Back to Home"
          className="w-6 h-6"
        />
      </button>
      <ul className="mt-8">
        <li
          onClick={() => {
            navigate("/dashboard");
            setActive("dashboard");
          }}
          className={`mb-2 text-center text-[#B65F3B] font-medium cursor-pointer p-3 ${
            active === "dashboard"
              ? "bg-[#F8EFEB] border-r-[3px] border-[#B65F3B]"
              : ""
          }`}
        >
          Podratçı şirkət üzrə planlama
        </li>
      </ul>
    </div>
  );
}
