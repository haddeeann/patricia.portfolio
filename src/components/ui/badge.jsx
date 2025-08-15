function Badge({ children, className }) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2 py-1 m-1 text-xs font-medium ${className}`}>{children}
        </span>
    );
}

export default Badge;
