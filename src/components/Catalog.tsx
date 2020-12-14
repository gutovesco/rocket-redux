import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api'
import {addProductToCartRequest} from '../store/modules/cart/actions'

const Catalog: React.FC = () => {
    const dispatch = useDispatch();
    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data);
        })
    }, [])

    const handleAddProductToCart = useCallback((product) => {
        dispatch(addProductToCartRequest(product))
    }, [dispatch])
    
    return (
        <div>
            <div>Catalog</div>
            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span>

                    <button onClick={() => handleAddProductToCart(product)} type="button">Comprar</button>
                </article>
            ))}
        </div>
    )
}

export default Catalog;