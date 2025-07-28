import { TextList } from "../components/text-list/TextList";


export function Home() {
    const list = ['Pomidoras', 'Agurkas', 'Svogunas', 'Cesnakas', 'Bulve'];
    
    return (
        <main>
            <section className="container">
                <div className="row">
                    <div className="col-12 mb-5 ms-5">
                        <ul>
                            {list.map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>

                        <div className="col-12 mb-5 ms-5">
                    <TextList/>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE
                    </div>
                </div>
            </section>
        </main>
    );
}