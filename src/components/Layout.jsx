import { Outlet } from "react-router-dom";
import logo from "../images/logo.png";

function Layout() {
  const date = new Date().getFullYear();
  const handleToogle = (e) => {
    document.documentElement.classList.toggle("dark")
    console.log(e.target.checked);
  }
  return (
    <>
      <header className="dark:bg-oscuro bg-perla py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-12 h-12 mr-2" src={logo} alt="imagen logo" />
            <h1 className="text-blue-900 dark:text-snow text-center font-breeSerif text-2xl font-bold">
              BBC BURGER
            </h1>
          </div>
          <nav className="flex items-center gap-4 dark:text-snow
           font-breeSerif">
            <a className="uppercase hover:text-blue-900" href="">
              Home
            </a>
            <a className="uppercase hover:text-blue-900" href="">
              Menú
            </a>
            <a className="uppercase hover:text-blue-900" href="">
              Servicios
            </a>
            <a className="uppercase hover:text-blue-900" href="">
              Ubicación
            </a>
            <a className="uppercase hover:text-blue-900" href="">
              Contáctanos
            </a>
          </nav>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onChange={handleToogle}/>
              <div className="w-11 h-6 bg-gray200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue300 dark:peer-focus:ring-blue800 rounded-full peer dark:bg-gray700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-snow after:border-gray300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray600 peer-checked:bg-blue600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-snow">
                Toggle me
              </span>
            </label>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-300 py-6 mt-10">
        <p className="text-center uppercase font-bold text-sm">
          Copyright &copy; {date} Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}

export default Layout;
