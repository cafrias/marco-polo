import Image from "next/image";
import Logo from "@/assets/logo.svg";

export function TopNav() {
  return (
    <header className="border-b border-base-200 flex gap-2 py-3 w-screen justify-center items-center">
      <Image className="m-0" src={Logo} alt="" height={25} width={25} />
      <h1 className="font-bold text-2xl">Marco Polo</h1>
    </header>
  );
}
