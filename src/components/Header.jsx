import ThemeButton from "./ThemeButton";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="absolute px-5 sm:px-0 w-full backdrop-blur shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-12 h-12 mr-2" src={logo} alt="imagen logo" />
          <h1 className="text-blue-900 dark:text-snow text-center text-2xl font-bold">
            BBC BURGER
          </h1>
        </div>
        <nav
          className="items-center dark:text-snow
           hidden md:flex"
        >
          <a className="uppercase mr-4 hover:text-blue-900" href="">
            Home
          </a>
          <a className="uppercase mr-4 hover:text-blue-900" href="#menu">
            Menú
          </a>
          <a className="uppercase mr-4 hover:text-blue-900" href="">
            Servicios
          </a>
          <a className="uppercase mr-4 hover:text-blue-900" href="">
            Ubicación
          </a>
          <a className="uppercase hover:text-blue-900" href="">
            Contáctanos
          </a>
        </nav>

        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
