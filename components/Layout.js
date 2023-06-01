function Layout({ children }) {
    return (
        <>
            <header className="container w-full bg-gray-500">
                <h1 className="text-4xl py-5 flex justify-center">Cinemabar</h1>
                <p className="flex justify-center text-center opacity-50">
                    あなたの気分によって映画を紹介します。<br/>
                    TMDB(https://www.themoviedb.org/)より提供されているデータを使用しています。<br/>
                    期待通りの結果にならない、当サイトのUIやデザイン、各種お問い合わせは<br/>
                    <p className="">github blog</p>
                </p>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;