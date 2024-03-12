/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import '../../index.css';
import dolar from '../../assets/dolar.jpg';
import area from '../../assets/area.jpg';
import galeria from '../../assets/galeria.jpg';
import hamburguesas from '../../assets/hamburguesas.png';

export function Proyectos() {
    return (
        <>
            <section id="proyectos" class="w-full h-full flex items-center justify-center flex-col text-white text-center">
                <div class="h-full cel:items-center cel:justify-center w-7/12 my-5 flex items-start justify-start">
                    <h3 class="text-amber-500 font-bold text-4xl ml-6 cel:ml-0">Proyectos</h3>
                </div>
                <div class="cel:w-full w-7/12 h-full flex items-center justify-around cel:flex-col">
                    <div class="cel:w-11/12 w-80 h-96 flex items-center justify-center flex-col bg-neutral-900 border-2 border-stone-800 mb-14">
                        <img src={galeria} class="w-8/12 h-32 bg-blue-500 mb-3"></img>
                        <h4 class="text-lg font-semibold text-orange-400">Galería</h4>
                        <p class="w-11/12 text-sm font-thin mb-4">Proyecto full stack donde una persona autenticada puede guardar recuerdos. Tecnologias usadas html, tailwind, javascript, php,
                        laravel, dbeaver, git y github.
                        </p>
                        <a href='https://github.com/iBxnja/galeria' class="bg-amber-500 rounded-full h-10 text-sm w-40 grid place-items-center">Ver codigo</a>
                    </div>
                    <div class="cel:w-11/12 w-80 h-96 flex items-center justify-center flex-col bg-neutral-900 border-2 border-stone-800 mb-14">
                        <img src={dolar} class="w-8/12 h-32 bg-blue-500 mb-3"></img>
                        <h4 class="text-lg font-semibold text-orange-400">Dolar Now</h4>
                        <p class="w-11/12 text-sm font-thin mb-4">Sitio donde se puede observar los valores de dolar obtenidos de una api publica, ademas de poder hacer su conversion a pesos. Tecnologias usadas html, tailwind, vue, github y axios
                        </p>
                        <a href='https://github.com/iBxnja/dolarnow.github.io' class="bg-amber-500 rounded-full h-10 text-sm w-40 grid place-items-center">Ver codigo</a>
                    </div>
                </div>
                <div class="cel:w-full w-7/12 h-full flex items-center justify-around cel:flex-col">
                    <div class=" cel:w-11/12 w-80 h-96 flex items-center justify-center flex-col bg-neutral-900 border-2 border-stone-800 mb-14">
                        <img src={area} class="w-8/12 h-32 bg-blue-500 mb-3"></img>
                        <h4 class="text-lg font-semibold text-orange-400">Area</h4>
                        <p class="w-11/12 text-sm font-thin mb-4">Sitio web dedicado a la astronomía. En esta página se puede observar los diferentes planetas y su información particular que los distingue entre ellos. Las tecnologidas usadas son html, tailwind, vue y javascript.                        </p>
                        <a href='https://github.com/iBxnja/area' class="bg-amber-500 rounded-full h-10 text-sm w-40 grid place-items-center">Ver codigo</a>
                    </div>
                    <div class="cel:w-11/12 w-80 h-96 flex items-center justify-center flex-col bg-neutral-900 border-2 border-stone-800 mb-14">
                        <img src={hamburguesas} class="w-8/12 h-32 bg-blue-500 mb-3"></img>
                        <h4 class="text-lg font-semibold text-orange-400">Hamburguesas</h4>
                        <p class="w-11/12 text-sm font-thin mb-4">Sitio ecommerce realizado de forma colectiva el cual se trata de un página de comida rapida. Las tecnologias usadas para esta página web fueron html, css, bootstrap, php, laravel, mysql, dbeaver, git y github.
                        </p>
                        <a href='https://github.com/iBxnja/hamburguesas' class="bg-amber-500 rounded-full h-10 text-sm w-40 grid place-items-center">Ver codigo</a>
                    </div>
                </div>
                
            </section>
        </>
    );
}