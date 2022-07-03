import { ChangeEvent } from "react"

export interface InputProps {
    name: string
    label: string
    value: string
    onChange: (value: string) => void
    error?: string
}

const Input = ({ name, label, value, onChange, error }: InputProps) => {
    return (
        <div className="field">
            <label
                className="field__label"
                htmlFor={ name }
            >
                { label }
            </label>
            <input
                className="field__input"
                name={ name }
                id={ name }
                type="text"
                value={ value }
                onChange={ (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value) }
            />
            {error ? <span className="error">{ error }</span> : null}
        </div>
    )
}

export default Input;