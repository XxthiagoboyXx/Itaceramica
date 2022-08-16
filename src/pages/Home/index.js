import React from "react";
import Product from "../../components/Product";
import { Link } from 'react-router-dom';
import './styles.css';


export default function Home() {

    return (
        <div className="container-fluid p-0 bg-light">

            <h2 className="catProd mt-0">Mais vendidos</h2>
            <hr />

            <section id="carouselSection" className="container carousel slide col-lg-3 col-md-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselSection" data-slide-to="1"></li>
                    <li data-target="#carouselSection" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <Link to="/p4" className="carousel-item active">
                        <img src="/assets/images/piso4.jpg" alt="Piso 1" className="d-block w-100" />
                        <div className="carousel-caption d-none d-block">
                            <span className="product-price bg-dark">R$ 20</span>
                        </div>
                    </Link>
                    <Link to="/p8" className="carousel-item">
                        <img src="/assets/images/piso8.jpeg" alt="Piso 2" className="d-block w-100 img-fluid" />
                        <div className="carousel-caption d-none d-block">
                            <span className="product-price bg-dark">R$ 60</span>
                        </div>
                    </Link>
                    <Link to="/p6" className="carousel-item">
                        <img src="/assets/images/piso6.jpg" alt="Piso 3" className="d-block w-100 img-fluid" />
                        <div className="carousel-caption d-none d-block">
                            <span className="product-price bg-dark">R$ 50</span>
                        </div>
                    </Link>
                </div>

                <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </div>
                <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </div>

            </section>


            {/*Eu que inclui o mb-5     "container p-2 mb-5"*/}
            <h2 className="catProd">Nossos pisos</h2>
            <hr />
            <section className="container mb-3 p-5 d-flex flex-row flex-wrap">
                {/*"list-unstyled" */}
                <Product price={40.00} image="/assets/thumbs/piso1.jpg" productId="p1" />
                <Product price={50.00} image="/assets/thumbs/piso2.jpg" productId="p2" />
                <Product price={50.00} image="/assets/thumbs/piso3.jpg" productId="p3" />
                <Product price={20.00} image="/assets/thumbs/piso4.jpg" productId="p4" />
                <Product price={100.00} image="/assets/thumbs/piso5.jpeg" productId="p5" />
                <Product price={50.00} image="/assets/thumbs/piso6.jpg" productId="p6" />
                <Product price={20.00} image="/assets/thumbs/piso7.jpeg" productId="p7" />
                <Product price={60.00} image="/assets/thumbs/piso8.jpeg" productId="p8" />
                {/*
                <Product price={50.00} image="/assets/thumbs/piso9.jpeg" productId="/produto" />
                <Product price={50.00} image="/assets/thumbs/piso10.jpg" productId="/produto" />
    */}
            </section>



        </div >
    );
}
