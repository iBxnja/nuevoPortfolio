import '../../index.css';

export function Footer(){
    return(
        <footer class="w-full h-40 bg-gray-900 flex items-center justify-center">
            <div class="flex items-center justify-center flex-col w-4/12 h-full">
                <a href='#sobremi' class="text-white text-sm underline">Sobre mi</a>
                <a href='#experiencia' class="text-white text-sm my-2 underline">Experiencia</a>
                <a href='#proyectos' class="text-white text-sm underline">Proyectos</a>
                <a href='#habilidades' class="text-white text-sm my-2 underline">Habilidades</a>
                <a href='#contacto' class="text-white text-sm underline">Contacto</a>
            </div>
            <div class="w-8/12 h-full flex items-center justify-center flex-col">
                <h2 class="text-lg font-bold text-white">@Benjamin Vallory</h2>
                <span class="text-white tracking-widest font-thin text-center">¡Gracias por visitar mi página web!.</span>
            </div>
        </footer>
    );
} 