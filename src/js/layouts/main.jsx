export default function MainLayout({ children }) {
    return (
        <div className="container min-vh-90 d-flex align-items-center justify-content-center flex-column gap-4 bg-light">
            {children}
        </div>
    );
}
