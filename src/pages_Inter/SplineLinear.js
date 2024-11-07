import React from 'react';
import Form_SplineLinear from '../Components_Inter/Form_SplineLinear'; // นำเข้า Component หลัก
import Navbar from '../pages/Navbar'; // นำเข้า Navbar

export default function SplineLinear() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Form_SplineLinear />
            </div>
        </div>
    );
}
