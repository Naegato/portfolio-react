import {EmailSender} from "./EmailSender";

export const Contact = () => {
    return (
        <div className="contact">
            <EmailSender />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.123776815806!2d2.4993819514968427!3d49.27405177920127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e635f3b1209993%3A0x83ef0aac9b4cfe7!2s21%20Rue%20Henry%20le%20Ch%C3%A2telier%2C%2060550%20Verneuil-en-Halatte!5e0!3m2!1sfr!2sfr!4v1648419494683!5m2!1sfr!2sfr"
                allowFullScreen={true} loading="lazy"/>
        </div>
    )
}