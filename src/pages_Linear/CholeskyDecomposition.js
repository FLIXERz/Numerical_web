import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form_CholeskyDecomposition from '../Components_Linear/Form_CholeskyDecomposition';
import Navbar from '../pages/Navbar';

export default function CholeskyDecomposition() {
    return (
        <div>
            <Navbar />
            <br /><br /><br />
            <div className="container">
                <center><h1>Cholesky Decomposition Method</h1></center>
                <Form_CholeskyDecomposition />
            </div>
        </div>
    );
}
