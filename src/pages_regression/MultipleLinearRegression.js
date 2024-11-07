import React from 'react';
import Navbar from '../pages/Navbar';
import Form_MultipleLinearRegression from '../Components_regression/Form_MultipleLinearRegression';

export default function MultipleLinearRegression() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Form_MultipleLinearRegression />
            </div>
        </div>
    );
}
