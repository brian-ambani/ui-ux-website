import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="logo" className="cursor-pointer" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p
              key={index}
              className="text-[#36485C] font-medium cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] cursor-pointer">
          Open an Account
        </p>
        <div className="flex items-center gap-2">
          <Image src={User} alt="User profile" className="cursor-pointer" />
          <span className="hidden font-medium text-[#36465C] lg:block cursor-pointer">
            Sign in
          </span>
        </div>
        <Image
          src={Menu}
          alt="menu icon"
          className="lg:hidden cursor-pointer"
        />
      </div>
    </nav>
  );
}
