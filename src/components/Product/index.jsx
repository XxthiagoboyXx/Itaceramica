import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Product({ price, image, productId }) {
    return (

        <div className="d-flex flex-column ml-auto mr-auto">
            <Link to={productId} className={styles.products}>
                < img src={image} alt="Imagem de piso" className="img-thumbnail mr-3" />
                <p className="mt-1 ml-auto mr-auto text-center product-price bg-dark">R$ {price}</p>
            </Link >


        </div >

    );
}