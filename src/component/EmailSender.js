import * as emailjs from "@emailjs/browser";
import {useRef} from "react";
import {TextTyping} from "./TextTyping";

export const EmailSender = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const divs = form.current.querySelectorAll('div');

        let bool = true;

        divs.forEach(div => {
            const label = div.querySelector('label');

            if (label) {
                if (label.classList.contains('error')) {
                    bool = false;
                }
            } else {
                bool = false;
            }
        })

        if (bool) {
            emailjs.sendForm("service_8ev3tas","template_i2vl2xb", form.current, 'aa3zt7DC9F3tnAkdx')
                .then((result) => {
                    console.log(result.text);
                    alert('Message envoyer !')
                }, (error) => {
                    console.log(error.text);
                    alert('Un problème est survenu !')
                });
            divs.forEach(div => {
                const text = div.querySelector('input') ? div.querySelector('input') : div.querySelector('textarea')

                if (text) {
                    text.value = '';
                }
            })
        }
    };

    return (
        <form className="email-sender" ref={form} onSubmit={sendEmail}>
            <TextTyping Type="input" name="user_email" typeValue="email" label="Email" />
            <TextTyping Type="input" name="message_object" typeValue="text" label="Object" />
            <TextTyping Type="textarea" name="message" label="Message" />
            <button type="submit">Submit message</button>
        </form>
    );
}