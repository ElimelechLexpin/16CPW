const Footer = () => {

  const estilos = {
    footer: "w-full bg-slate-600 dark:bg-black text-white flex justify-between items-center px-8 py-6",
    imagen: "w-32 mix-blend-multiply",
    contenedor_anclas: "flex gap-4",
    anclas: "font-bold font-[Arial] hover:text-gray-400",
  };

  return (
    <>
      <footer className={estilos.footer}>
        <h2>FOOTER</h2>
      </footer>
    </>
  );
};

export default Footer;
