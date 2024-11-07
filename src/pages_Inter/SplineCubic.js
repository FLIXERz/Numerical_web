import React from 'react';
import Form_SplineCubic from '../Components_Inter/Form_SplineCubic';
import Navbar from '../pages/Navbar';

export default function SplineCubic() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Form_SplineCubic />
            </div>
        </div>
    );
}
