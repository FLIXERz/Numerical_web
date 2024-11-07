import React from 'react';
import Form_SplineQuadratic from '../Components_Inter/Form_SplineQuadratic';
import Navbar from '../pages/Navbar';

export default function SplineQuadratic() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Form_SplineQuadratic />
            </div>
        </div>
    );
}
