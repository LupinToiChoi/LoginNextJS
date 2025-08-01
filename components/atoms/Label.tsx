export interface LabelProps {
    text?: string;
    htmlFor?: string;
    className?: string;
    children?: React.ReactNode;
}
export function Label({ text, htmlFor, className = '', children }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
            {text}
            {children}
        </label>
    );
}