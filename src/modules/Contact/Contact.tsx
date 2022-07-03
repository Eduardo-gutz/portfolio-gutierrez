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

interface formData {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const { control, handleSubmit } = useForm<formData>();

    const onFormSubmit = (data: formData) => {
        console.log(data);
    }
    return (
        <main className="contact">
            <Title>
                Contactame
            </Title>
            <Card>
                <div className="form">
                    <form className="form__fields" onSubmit={ handleSubmit(onFormSubmit) }>
                        <Paragraph>
                            Enviame un mensage y me contactare contigo lo mas rapido posible
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
                                    label={ 'Tu nombre:' }
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
                                    label={ 'Tu email:' }
                                    value={value}
                                    onChange={ onChange }
                                    error={ error?.message }
                                />
                            }
                        />
                        <Controller
                            name='message'
                            control={ control }
                            rules={{ required: 'Requerido', minLength: {value: 80, message: 'Tu mensaje debe ser tener al menos 80 caracteres'} }}
                            render={({
                                field: { onChange, value, name },
                                fieldState: { error }
                            }) =>
                                <TextArea
                                    name={ name }
                                    label={"Mensaje:"}
                                    value={ value }
                                    onChange={ onChange }
                                    error={ error?.message }
                                />
                            }
                        />
                        <CTALink
                            label={"Enviar mensaje"}
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
                    </div>
                </div>
            </Card>
        </main>
    )
}

export default Contact;