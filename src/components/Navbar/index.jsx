import { Link } from 'react-router-dom';

export function Navbar() {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            {/*name site header*/}
            <Link className="navbar-brand" to="/"><i class="fas fa-hammer"></i>&nbsp;Itacerâmica</Link>


            {/*expander menu*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/*itens menu*/}
            <section className="collapse navbar-collapse" id="navbarMainToggler">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/contato">Contato</Link>
                </div>
            </section>

        </nav>

    );
}