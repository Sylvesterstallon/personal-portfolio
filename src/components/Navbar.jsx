import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-white  text-5xl/10 text-[size] ">Ss</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedinIn />
        <FaGithub />
        <FaXTwitter />
       <FaInstagramSquare />
       
      </div>
    </nav>
  );
};

export default Navbar;
