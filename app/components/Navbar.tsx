import Image from "next/image";
import Logo from "../../public/assests/Logo.svg";
import User from "../../public/assests/User.svg";
import Menu from "../../public/assests/Menu.svg";

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px]">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex gap-5">
        <div>
          <Image src={User} alt="User profile" />
        </div>
        <Image src={Menu} alt="menu icon" />
      </div>
    </nav>
  );
}
