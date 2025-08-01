interface InputProps {
    id: string;
    name: string;
    type: 'text' | 'email' | 'password';
    autoComplete?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className: string;
    required: boolean;
    label?: string;
    backgroundColor?: string;
}
export function Input({
    id,
    name,
    type,
    autoComplete,
    value = '',
    onChange,
    className = '',
    required = false,
    label,
    backgroundColor
}: InputProps
) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            className={className}
            required={required}
            aria-label={label}
            style={{ backgroundColor }}
        />
    );
}
