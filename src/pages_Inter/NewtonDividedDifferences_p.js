import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form_NewtonDividedDifferences from '../Components_Inter/Form_NewtonDividedDifferences';
import Navbar from '../pages/Navbar';

export default function NewtonDividedDifferences() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <center><h1>Newton's Divided Differences</h1></center>
                <Form_NewtonDividedDifferences />
            </div>
        </div>
    );
}
