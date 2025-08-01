interface HeaderProps {
    className?: string;
    children?: React.ReactNode;
}
export function Header({ className = '', children }: HeaderProps) {
    return (
        <header className={`bg-gray-800 text-white ${className}`}>
            <div className="container mx-auto flex flex-col justify-between items-left">
                <h1 className="text-xl font-bold ">UI Unicorn</h1>
                {children}
            </div>
        </header>
    );
}