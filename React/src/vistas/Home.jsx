// Importamos el componente Navbar en Home.jsx
import Button from "../componetes/Button";
import Seccion from "../componetes/Seccion";

const Home = () => {
    const estilos = {
        contenedor: "text-center flex flex-col pt-32 items-center w-full h-screen gap-12",
        titulo: "font-bold text-4xl",
        contenedor_2: "flex flex-col gap-4",
        subtitulo: "font-bold text-2xl",
        parrafo: "font-[Arial] hover:text-gray-400",
    }

    return ( 
        <section>
            
            <section className={estilos.contenedor + " bg-slate-500"} >
                <div>
                    <h1 className={estilos.titulo}>Home</h1>
                    <p className={estilos.parrafo}>Bienvenido a la página de inicio</p>
                </div>

                <div className={estilos.contenedor_2}>
                    <div>
                        <h2 className={estilos.subtitulo}>¿Qué es React?</h2>
                        <p className={estilos.parrafo}>React es una biblioteca de JavaScript para construir interfaces de usuario.</p>
                    </div>

                    <div>
                        <h2 className={estilos.subtitulo}>¿Por qué React?</h2>
                        <p className={estilos.parrafo}>React te ayuda a escribir código más limpio y más fácil de mantener.</p>
                    </div>

                    <div>
                        {/* Con la propiedad style podemos darle estilos, utilizando objetos */}
                        <p style={{color:"red", backgroundColor:"blue"}}>Hola soy un parrafo, de ejemplo para el estilo css</p>
                        <Button text="Aceptar" />
                        <Button text="Cancelar" color="bg-red-500" />
                        <Seccion>
                            <p>Soy el hijo de la seccion</p>
                        </Seccion>
                    </div>
                </div>
            </section>
            
        </section>
    );
}

export default Home;