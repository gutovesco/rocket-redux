import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Catalog: React.FC = () => {
    const store = useSelector(state => state);
    return (
        <div>
            Catalog
        </div>
    )
}

export default Catalog;