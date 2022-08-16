import React from 'react';
import './styles.css'

function Contato() {
    return (
        <div className="bg-dark">
            < main className="card-post" >
                <h1>Entre em Contato</h1>
                <div className="card-body-post">

                    <form action="mailto:Auba@Developer.com" autocomplete="on">
                        <div className="fields">
                            <label for="fname">Nome</label>
                            <input required autofocus name="fname " id="fname" type="text" placeholder="Digite seu nome aqui" />
                        </div>

                        <div className="fields">
                            <label for="sname">Sobrenome</label>
                            <input required name="sname " id="sname" type="text" placeholder="Digite seu sobrenome aqui" />
                        </div>

                        <div className="fields">
                            <label for="comment">Mensagem</label>
                            <textarea required name="comment" id="" cols="64" rows="10" maxlenght="300"></textarea>
                        </div>

                        <div className="btn-post">
                            <button class="btn-submit mb-5" type="submit">Enviar Email</button>
                        </div>
                    </form>

                </div>



            </main >
        </div >

    );
};

export default Contato;