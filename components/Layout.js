function Layout({ children }) {
    return (
        <>
            <header>
                <h1>Cinemabar</h1>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;