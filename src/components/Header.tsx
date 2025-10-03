import { jwtDecode } from "jwt-decode";

export default function Header() {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const token = userData?.access_token;

  let fullName = "İstifadəçi";
  if (token) {
    try {
      const decodedToken: any = jwtDecode(token);
      fullName = decodedToken?.FullName || "İstifadəçi";
    } catch (error) {
      console.error("Token decode edilə bilmədi:", error);
    }
  }

  return (
    <header className="bg-white text-black p-4 flex items-center justify-between border-b border-[#E3E3E3]">
      <div className="flex-1 text-center flex items-center justify-center gap-2">
        <img
          src="/icons/BlackPlanning.svg"
          alt="Planning Icon"
          className="w-6 h-6"
        />
        <h1 className="text-xl font-bold">PLANLAMA</h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm">{fullName}</span>
      </div>
    </header>
  );
}
