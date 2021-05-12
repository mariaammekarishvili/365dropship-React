import Header from "./Header";

const Main = () => {
    return(
        <main className="main">

            <Header/>

            <div className="main__sort">
                <select id="sort">
                    <option value="asc">Ascoding</option>
                    <option value="desc">DEsscoding</option>
                </select>
            </div>

            <section className="main__catalog">


            </section>

        </main>
    )
}

export default Main