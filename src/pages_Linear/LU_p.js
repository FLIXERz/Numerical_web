import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Form_LUDecomposition from '../Components_Linear/Form_LUDecomposition'; // import component สำหรับการคำนวณ LU
import Navbar from '../pages/Navbar';

export default function LUDecomposition() {
    return (
        <div>
            <Navbar/>
            <br/><br/><br/>
            <div className='container'>
                <center><h1>LU Decomposition Method</h1></center>
                <Form_LUDecomposition />
            </div>
        </div>
    );
}
