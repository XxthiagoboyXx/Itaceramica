import React from 'react';
import { Link } from 'react-router-dom';


function p4() {
    return (
        <main className="bg-light mb-5">
            <div className="p-4 d-flex flex-column flex-md-row flex-sm-row">
                <div className="col-lg-6 col-md-6">
                    <h2>Piso Mini Quadrados</h2>
                    <img src="/assets/images/piso4.jpg" alt="IMG Piso Mini Quadrados" height="300" />
                    <p> Preço (R$):<strong> 20,00</strong></p>

                    <form action="">
                        <label className="text-dark">Unidade(s)</label>
                        <input required id="quantidade" type="number" min="1" max="500" value="1" />
                        <label className="text-dark" for="cep">Calcular Frete</label>
                        <div className="d-flex flex-row align-items-center">
                            <input id="l_cpf" type="text" maxlength="8" placeholder="Digite o CEP" />
                            <button class="btn btn-secondary  m-2" type="button">OK</button>
                        </div>
                        <Link to="/sucesso">
                            <input class="btn btn-primary mt-2" type="submit" value="Comprar" />
                        </Link>
                    </form>
                </div>
                <hr />
                <div className="col-lg-6 col-md-6" >
                    <h3>Descrição</h3>
                    <p>Piso Mini Quadrados, qualidade impecável.</p>
                </div>
            </div>
        </main>
    );
};

export default p4;