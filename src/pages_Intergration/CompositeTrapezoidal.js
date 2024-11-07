import React from 'react';
import Navbar from '../pages/Navbar';
import Form_CompositeTrapezoidal from '../Components_Intergration/Form_CompositeTrapezoidal';

export default function CompositeTrapezoidal() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Form_CompositeTrapezoidal />
            </div>
        </div>
    );
}
