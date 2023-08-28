function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="relative bg-rojo py-6">
      <p className="text-center uppercase font-bold text-sm">
        Copyright &copy; {date} Todos los derechos reservados
      </p>
    </div>
  );
}

export default Footer;
