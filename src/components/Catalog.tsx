import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api'

// import { Container } from './styles';

const Catalog: React.FC = () => {
    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        })
    }, [])
    
    return (
        <div>
            <div>Catalog</div>
            {catalog.map(item => (
                <article key={item.id}>
                    <strong>{item.title}</strong> {" - "}
                    <span>{item.price}</span>

                    <button type="button">Comprar</button>
                </article>
            ))}
        </div>
    )
}

export default Catalog;