import { ChangeEvent } from "react"
import { InputProps } from "./Input"

const TextArea = ({ name, label, value, onChange, error }: InputProps) => {
    return (
        <div className="field">
            <label
                className="field__label"
                htmlFor={ name }
            >
                { label }
            </label>
            <textarea
                className="field__area"
                name={ name }
                id={ name }
                value={ value }
                onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value) }
            />
            {error ? <span className="error">{ error }</span> : null}
        </div>
    )
}

export default TextArea;