/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import '../../index.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import laravel from '../../assets/laravel.png';
import tailwind from '../../assets/tailwind.png';
import php from '../../assets/php.png';
import javascript from '../../assets/javascript.png';
import dbeaver from '../../assets/dbeaver.png';
import axios from '../../assets/axios.png';
import vue from '../../assets/Vue.png';
import mysql from '../../assets/mysql.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import jquery from '../../assets/jquery.png';
import ajax from '../../assets/ajax.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';
import postgresql from '../../assets/postgresql.png';
import bootstrap from '../../assets/bootstrap.png';
import django from '../../assets/django.png';
import illustrator from '../../assets/illustrator.png';
import figma from '../../assets/figma.png';
import java from '../../assets/java.png';
import next from '../../assets/next.png';
import flutter from '../../assets/Flutter.png';
import node from '../../assets/node.png';

export function Habilidades() {
    return (
        <>
            <section id="habilidades" class="w-full h-full flex items-center justify-center flex-col text-white text-center">
                <div class="h-full w-7/12 my-5 flex cel:items-center cel:justify-center items-start justify-start">
                    <h3 class="text-amber-500 font-bold text-4xl ml-6 cel:ml-0">Habilidades</h3>
                </div>
                <div class="cel:w-full w-7/12 h-full cel:flex-col flex items-center justify-around">
                    <div class="cel:w-11/12 w-80 h-96 flex flex-col items-center flex-wrap justify-center bg-neutral-900 border-2 border-stone-800 mb-14">
                        <div class="">
                            <h2 class="text-xl mt-5 font-bold">Front-End</h2>
                        </div>
                        <div class="cel:w-full w-80 h-80 flex items-center justify-center flex-wrap">
                            <img src={html} class="w-10 h-10 mx-5"></img>
                            <img src={css} class="w-10 h-10 mx-5"></img>
                            <img src={javascript} class="w-10 h-10 mx-5"></img>
                            <img src={vue} class="w-10 h-10 mx-5"></img>
                            <img src={react} class="w-10 h-10 mx-5"></img>
                            <img src={jquery} class="w-10 h-10 mx-5"></img>
                            <img src={bootstrap} class="w-12 h-10 mx-5"></img>
                            <img src={tailwind} class="w-16 h-10 mx-5"></img>
                        </div>
                    </div>
                    <div class="cel:w-11/12 w-80 h-96 flex items-center justify-center flex-wrap bg-neutral-900 border-2 border-stone-800 mb-14">
                        <div>
                            <h2 class="text-xl mt-5 font-bold">Back-End</h2>
                        </div>
                        <div class="cel:w-full w-80 h-80 flex items-center justify-center flex-wrap">
                            <img src={php} class="w-16 h-10 mx-5"></img>
                            <img src={laravel} class="w-10 h-10 mx-5"></img>
                            <img src={node} class="w-10 h-10 mx-5"></img>
                            <img src={python} class="w-10 h-12 mx-5"></img>
                            <img src={django} class="w-12 h-10 mx-5"></img>
                            <img src={ajax} class="w-14 h-9 mx-5"></img>
                            <img src={mysql} class="w-10 h-10 mx-5"></img>
                            <img src={git} class="w-10 h-10 mx-5"></img>
                            <img src={axios} class="w-20 h-8 mx-5"></img>
                            <img src={flutter} class="w-20 mx-5"></img>
                        </div>
                    </div>
                </div>
                <div class="cel:w-full w-7/12 h-full flex items-center justify-around cel:flex-col">
                    <div class="cel:w-11/12 w-80 h-96 flex items-center justify-center flex-wrap bg-neutral-900 border-2 border-stone-800 mb-14">
                        <div><h2 class="text-xl mt-5 font-bold">Aprendiendo</h2></div>
                        <div class="cel:w-full w-80 h-80 flex items-center justify-center flex-wrap">
                            <img src={java} class="w-20 mx-5"></img>
                            <img src={next} class="w-20 mx-5"></img>
                        </div>
                    </div>
                    <div class="cel:w-11/12 w-80 h-96 flex items-center justify-center flex-wrap bg-neutral-900 border-2 border-stone-800 mb-14">
                        <div><h2 class="text-xl mt-5 font-bold">Control de versión</h2></div>
                        <div class="cel:w-full w-80 h-80 flex items-center justify-center flex-wrap">
                            <img src={dbeaver} class="w-10 h-10 mx-5"></img>
                            <img src={postgresql} class="w-10 h-10 mx-5"></img>
                            <img src={github} class="w-10 h-10 mx-5"></img>
                            <img src={illustrator} class="w-10 h-10 mx-5"></img>
                            <img src={figma} class="w-12 h-10 mx-5"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}