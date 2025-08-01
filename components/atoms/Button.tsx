interface ButtonProps {
    children: React.ReactNode;
    type?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    className?: string;
}

export function Button({
    children,
    type = 'button',
    onClick,
    className = ''
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${className}`}
        >
            {children}
        </button>
    );
}
