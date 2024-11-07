import React from 'react';
import Navbar from '../pages/Navbar';
import Form_SimpsonsRule from '../Components_Intergration/Form_SimpsonsRule';

export default function SimpsonsRule() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Form_SimpsonsRule />
            </div>
        </div>
    );
}
