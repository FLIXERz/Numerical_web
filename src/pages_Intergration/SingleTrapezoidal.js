import React from 'react';
import Navbar from '../pages/Navbar';
import Form_SingleTrapezoidal from '../Components_Intergration/Form_SingleTrapezoidal';

export default function SingleTrapezoidal() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Form_SingleTrapezoidal />
            </div>
        </div>
    );
}

