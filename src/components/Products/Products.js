import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Products Here</h2>
            <h3>User namae: {user ? user.displayName : 'No One'}</h3>
        </div>
    );
};

export default Products;