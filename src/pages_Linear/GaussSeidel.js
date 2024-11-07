import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form_GaussSeidel from '../Components_Linear/Form_GaussSeidel';
import Navbar from '../pages/Navbar';

export default function GaussSeidel() {
    return (
        <div>
            <Navbar />
            <br /><br /><br />
            <div className="container">
                <center><h1>Gauss-Seidel Iteration Method</h1></center>
                <Form_GaussSeidel />
            </div>
        </div>
    );
}
