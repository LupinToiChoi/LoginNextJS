interface SidebarProps {
    children: React.ReactNode;
    className?: string;
}
export function Sidebar({ children, className = '' }: SidebarProps) {
    return (
        <aside className={`bg-gray-100 p-4 ${className}`}>
            <div className="container mx-auto">
                {children}
            </div>
        </aside>
    );
}