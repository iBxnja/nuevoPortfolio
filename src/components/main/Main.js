import '../../index.css';
import { Inicio } from './Inicio';
import { Experiencia } from './Experiencia';
import { Proyectos } from './Proyectos';
import { Habilidades } from './Habilidades';
import { Contacto } from './Contacto';

export function Main(){
    return(
        <>
        <Inicio />
        <Experiencia />
        <Proyectos />
        <Habilidades />
        <Contacto />
        </>
    );
}