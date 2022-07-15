import Card from "../../components/card/Card";
import CTALink from "../../components/cta-link/CTALink";
import { Line } from "../../components/divider/Line";
import Input from "../../components/Inputs/Input";
import TextArea from "../../components/Inputs/TextArea";
import Paragraph from "../../components/paragraph/Paragraph";
import Title from "../../components/title/Title";
import linkedin from '../../assets/svg/linkedinWhite.svg';
import github from '../../assets/svg/githubWhite.svg';
import instagram from '../../assets/svg/intsagramWhite.svg';
import { useForm, Controller } from 'react-hook-form';
import { downloadCurriculum } from "../../firebase/skills";
import emailjs from '@emailjs/browser';
import { enviroments } from "../../enviroment/global";
import Alert from "../../components/alert/Alert";
import { useState } from "react";
import texts from '../../assets/texts.json';

interface formData {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const { control, handleSubmit,reset } = useForm<formData>();
    const [ sendMessage, setSendMessage ] = useState<string>('');
    const t = texts.contact

    const onFormSubmit = async (data: formData) => {
        try{
            const email = await emailjs.send(enviroments.serviceMail, enviroments.templMail, {...data}, enviroments.emailjsPublic)

            console.log(email);
            
            if(email.text === 'OK') {
                setSendMessage('succes')
                reset()
            } else {
                setSendMessage('error')
            }
        } catch(error) {
            setSendMessage('error')
        }
    }

    const downloadCV = async () => {
        const url = await downloadCurriculum();
        const anchor = document.createElement('a');
        anchor.setAttribute('hidden', 'true');
        anchor.setAttribute('download', 'Eduardo_Gutierrez.pdf');
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('href', url);
        
        anchor.click()
        
    }
    return (
        <main className="contact">
            <Alert
                open={ sendMessage === 'succes' }
                action={ () => setSendMessage('') }
                onClose={ () => setSendMessage('') }
                text='Se ha enviado el mensaje correctamente gracias por contactarme'
                textButton="Aceptar"
                title="Mensaje Enviado"
                type='succes'
            />
            <Alert
                open={ sendMessage === 'error' }
                action={ () => setSendMessage('') }
                onClose={ () => setSendMessage('') }
                text='Opps! Hubo un error al enviar el mensaje, intentalo nuevamente'
                textButton="Aceptar"
                type='error'
            />
            <Title>
                { t.title }
            </Title>
            <Card>
                <div className="form">
                    <form className="form__fields" onSubmit={ handleSubmit(onFormSubmit) }>
                        <Paragraph>
                            { t.inst }
                        </Paragraph>
                        <Controller
                            name='name'
                            control={ control }
                            rules={{ required: 'Requerido' }}
                            render={({
                                field: { onChange, value, name },
                                fieldState: { error }
                            }) =>
                                <Input
                                    name={ name }
                                    label={ t.inputs.name + ':' }
                                    value={value}
                                    onChange={ onChange }
                                    error={ error?.message }
                                />
                            }
                        />
                        <Controller
                            name='email'
                            control={ control }
                            rules={{
                                required: 'Requerido',
                                pattern: {
                                    value: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi,
                                    message: 'Ingresa una direccion de correo valida'
                                }
                            }}
                            render={({
                                field: { onChange, value, name },
                                fieldState: { error }
                            }) =>
                                <Input
                                    name={ name }
                                    label={ t.inputs.email + ':' }
                                    value={value}
                                    onChange={ onChange }
                                    error={ error?.message }
                                />
                            }
                        />
                        <Controller
                            name='message'
                            control={ control }
                            rules={{ required: 'Requerido' }}
                            render={({
                                field: { onChange, value, name },
                                fieldState: { error }
                            }) =>
                                <TextArea
                                    name={ name }
                                    label={ t.inputs.message + ':' }
                                    value={ value }
                                    onChange={ onChange }
                                    error={ error?.message }
                                />
                            }
                        />
                        <CTALink
                            label={ t.inputs.button }
                            secondary
                            action={() => handleSubmit(onFormSubmit)}
                        />
                    </form>
                    <Line />
                    <div className="form__socials">
                        <Paragraph>
                            Tambien puedes encontrarme en
                        </Paragraph>
                        <div className="socials">
                            <a className="socials__social" href='https://github.com/Eduardo-gutz' target='_blank' rel="noreferrer">
                                <img src={github} alt="github link" />
                            </a>
                            <a className="socials__social" href='https://www.instagram.com/eduardo.gutzfl/' target='_blank' rel="noreferrer">
                                <img src={instagram} alt="instagram link" />
                            </a>
                            <a className="socials__social" href='https://www.linkedin.com/in/eduardogutierrezfl' target='_blank' rel="noreferrer">
                                <img src={linkedin} alt="linkedin link" />
                            </a>
                        </div>
                        <CTALink
                            label={ texts.about.buttons.CV }
                            action={() => downloadCV()}
                            secondary
                        />
                    </div>
                    </div>
            </Card>
        </main>
    )
}

export default Contact;