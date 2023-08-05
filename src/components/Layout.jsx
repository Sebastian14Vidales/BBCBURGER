import { Outlet } from "react-router-dom";

function Layout() {
  const date = new Date().getFullYear();
  
  return (
    <>
      <div className="bg-gray-300 py-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-blue-900 text-center text-4xl font-extrabold">
            BBC BURGER
          </h1>
          <nav className="flex items-center gap-4">
            <a className="uppercase font-bold hover:text-blue-900" href="">
              Home
            </a>
            <a className="uppercase font-bold hover:text-blue-900" href="">
              Menú
            </a>
            <a className="uppercase font-bold hover:text-blue-900" href="">
              Servicios
            </a>
          </nav>
          <button className="uppercase font-bold">Contactanos</button>
        </div>
      </div>
      <main>
        <Outlet />
        {/* <h1>HOLA MUNDO</h1> */}
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
