import logoImg from "../../assets/logo_img.png"
import { ModeToggle } from "../ui/mode-toggle";
const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto my-5 flex items-center gap-3 px-5">
      <div className="flex text-xl font-medium items-center">
        <img className="size-[10%]" src={logoImg} alt="" />
        <span className="font-bold ml-2">Task</span>Ify
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
