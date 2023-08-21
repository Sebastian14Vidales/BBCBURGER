function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="relative bg-gray-300 py-6 mt-10">
      <p className="text-center uppercase font-bold text-sm">
        Copyright &copy; {date} Todos los derechos reservados
      </p>
    </div>
  );
}

export default Footer;
