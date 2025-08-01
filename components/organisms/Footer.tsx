interface FooterProps {
    className?: string;
    children?: React.ReactNode;
}
export function Footer({ className = '', children }: FooterProps) {
    return (
        <footer className={`bg-gray-200  text-white text-bottom ${className}`}>
            <div className="container mx-auto  text-center">
                {children || '© 2023 Your Company. All rights reserved.'}
            </div>
        </footer>
    );
}
