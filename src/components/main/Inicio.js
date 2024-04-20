/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import '../../index.css';
import BenjaminVallory from '../../assets/BenjaminVallory.jpg';

export function Inicio() {
    return (
        <>
            <section id="sobremi" class="w-full cel:h-full h-screen flex items-center justify-center flex-col text-white text-center">
                <span class="grid place-items-center mb-4 w-16 h-16 bg-orange-400 rounded-full cel:mt-5">
                    <i class="fa-solid fa-code text-xl text-white"></i>
                </span>
                <h4 class="font-medium text-xl">Hola, soy Benjamin Vallory</h4>
                <h3 class="font-bold cel:text-2xl text-5xl mt-2 mb-3" ><span class="text-orange-400">Un programador web</span><br />full stack <span class="text-orange-400">junior</span> que hace<br /><span class="text-orange-400">realidad</span>  tus ideas.</h3>
                <p class="cel:w-11/12 w-5/12 cel:h-full h-28 text-center font-light my-3 cel:text-sm">
                    Soy un apasionado <span class="font-semibold text-amber-400">programador</span> y me gusta estar en constante aprendizaje. Dedico mi tiempo libre
                    a estudiar diversos <span class="font-semibold text-amber-400">lenguajes de programacion, frameworks, librerias, etc.</span> Mis metas y visiones a
                    futuro son <span class="font-semibold text-amber-400">poder trabajar</span> en lo que me apasiona y seguir <span class="text-amber-400 font-semibold">perfeccionándome</span> cada día en este campo.
                </p>
                <div class="cel:pb-5 flex items-center cel:mt-2 justify-center cel:gap-4 gap-10 cel:w-full cel:h-full">
                    <a href={BenjaminVallory} download="BenjaminVallory.jpg" class="grid place-items-center cel:w-12 cel:h-12 w-16 h-16 border-2 border-black bg-green-700 rounded-full"><i class="fa-solid fa-file"></i></a>
                    <a href='www.linkedin.com/in/diego-benjamin-vallory-52b793263' class="grid place-items-center cel:w-12 cel:h-12 w-16 h-16 border-2 border-black bg-blue-900 rounded-full"><i class="fa-brands fa-linkedin"></i></a>
                    <a href='https://github.com/iBxnja' class="grid place-items-center cel:w-12 cel:h-12 w-16 h-16 border-2 border-black bg-neutral-900 rounded-full"><i class="fa-brands fa-github"></i></a>
                    <a href='mailto:benjaminvallory41gmail.com' class="grid place-items-center cel:w-12 cel:h-12 w-16 h-16 border-2 border-black bg-orange-700 rounded-full"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </section>
        </>
    );
}