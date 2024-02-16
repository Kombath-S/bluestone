
interface ITextInput {
    name: string,
    label: string,
    type?: 'text' | 'email' | 'select' | 'tel' | 'textarea',
    className?: string
}


export const TextInput = ({ name, label, type, className }: ITextInput) => {
    return (
        <span className={`relative inline-flex flex-col ${className}`}>
            <span className="tablet:text-sm">{label}</span>
            {(type != 'select' && type != 'textarea') && <input type={type} name={name} className="outline-none border-b-2 border-blue text-gray-300 h-8" />
            }
            {type == 'select' &&
                <select name={name} id={name}
                    className="outline-none border-b-2 border-blue text-gray-300  h-8">
                </select>}
            {type == 'textarea' &&
                <textarea name="" id="" className="outline-none border-b-2 border-blue text-gray-300">

                </textarea>}
        </span>
    )
}
