function Layout({ children }) {
    return (
        <>
            <header className="container w-full bg-gray-500">
                <h1 className="flex justify-center">Cinemabar</h1>
                <p>
                    あなたの気分によって映画を紹介します。<br/>
                    TMDB(https://www.themoviedb.org/)のデータを使用しています。<br/>
                    期待通りの結果にならない、当サイトのUIやデザイン、各種お問い合わせは<br/>
                    github, blogまで。
                </p>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;