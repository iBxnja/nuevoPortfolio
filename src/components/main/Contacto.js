/* eslint-disable no-restricted-globals */
import '../../index.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bmlq4vq', 'template_v4bzinq', form.current, 'N4ObmLcyeKEP-ybQl')
            .then((result) => {
                console.log(result.text);
                alert('¡Enviado correctamente!.');
                location.reload()
            }, (error) => {
                console.log(error.text);
                alert('¡Error al enviar el correo!.')
                location.reload()
            });
    };



    return (
        <>
            <section id="contacto" class="w-full h-full flex items-center justify-center flex-col text-white text-center pb-10">
                <form ref={form} onSubmit={sendEmail} class="cel:w-11/12 w-7/12 h-full flex cel:items-center items-start justify-center flex-col">
                    <div class="cel:flex cel:items-center cel:justify-center cel:w-full ">
                    <h3 class="text-amber-500 font-bold text-4xl ml-6 cel:ml-0">Contacto</h3>
                    </div>
                    <div class="cel:ml-0 ml-6 w-10/12 h-full my-10 flex items-start cel:items-center justify-center flex-col">
                        <label for="" class="text-xl mb-2 text-orange-500">Nombre completo</label>
                        <input type='text' name="user_name" required class="text-black w-full"></input>
                    </div>
                    <div class="cel:ml-0 ml-6 w-10/12 h-full flex items-start cel:items-center justify-center flex-col">
                        <label for="" class="text-xl mb-2 text-orange-500">Correo electronico</label>
                        <input type='email' name="user_email" required class="text-black w-full"></input>
                    </div>
                    <div class="cel:ml-0 ml-6 w-10/12 h-full my-10 flex items-start cel:items-center justify-center flex-col">
                        <label for="" class="text-xl mb-2 text-orange-500">Mensaje</label>
                        <textarea name="message" class="resize-none h-36 overflow-auto w-full text-black"></textarea>
                    </div>
                    <input value="Enviar" type="submit" class="cursor-pointer cel:ml-0 ml-6 w-36 h-12 grid place-items-center bg-amber-600 rounded-full"></input>
                </form>
            </section>
        </>
    );
}