import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form_LagrangeInterpolation from '../Components_Inter/Form_LagrangeInterpolation';
import Navbar from '../pages/Navbar';

export default function LagrangeInterpolation() {
    return (
        <div>
            <Navbar />
            <center><h1>Lagrange Interpolation</h1></center>
            <div className='container'>
                <Form_LagrangeInterpolation />
            </div>
        </div>
    );
}
