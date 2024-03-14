import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <Image src={User} alt="User profile" />
          <span className="hidden font-medium text-[#36465C] lg:block">
            Sign in
          </span>
        </div>
        <Image src={Menu} alt="menu icon" className="lg:hidden" />
      </div>
    </nav>
  );
}
