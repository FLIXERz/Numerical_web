import React from 'react';
import Navbar from '../pages/Navbar';
import Form_PolynomialRegression from '../Components_regression/Form_PolynomialRegression';

export default function PolynomialRegression() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Form_PolynomialRegression />
            </div>
        </div>
    );
}
