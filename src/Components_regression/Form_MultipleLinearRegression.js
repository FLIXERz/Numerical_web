import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { multipleLinearRegression } from '../Input_regression/TestMultipleLinearReg';

export default function Form_MultipleLinearRegression() {
    const [x1Values, setX1Values] = useState(Array(5).fill(0));
    const [x2Values, setX2Values] = useState(Array(5).fill(0));
    const [yValues, setYValues] = useState(Array(5).fill(0));
    const [coefficients, setCoefficients] = useState([]);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [predictedY, setPredictedY] = useState(null);

    const calculateMultipleLinearRegression = (event) => {
        event.preventDefault();
        const X = x1Values.map((x1, i) => [1, x1, x2Values[i]]);
        const Y = yValues;

        const coeffs = multipleLinearRegression(X, Y);
        setCoefficients(coeffs);

        const prediction = coeffs[0] + coeffs[1] * value1 + coeffs[2] * value2;
        setPredictedY(prediction);
    };

    return (
        <div className="container-xxl">
            <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-75 p-3 shadow p-3 mb-5 bg-body rounded">
                <center><h1>Multiple Linear Regression</h1></center>
                <form onSubmit={calculateMultipleLinearRegression}>
                    <div className="row">
                        <div className="col-md-4">
                            <label>X1 Values</label>
                            <div className="d-flex flex-wrap">
                                {x1Values.map((x, index) => (
                                    <input
                                        key={`x1${index}`}
                                        type="number"
                                        className="form-control m-1"
                                        style={{ width: "60px" }} // ปรับขนาดความกว้างของช่องอินพุต
                                        value={x}
                                        onChange={(e) => {
                                            const newX1Values = [...x1Values];
                                            newX1Values[index] = parseFloat(e.target.value);
                                            setX1Values(newX1Values);
                                        }}
                                        placeholder={`X1-${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label>X2 Values</label>
                            <div className="d-flex flex-wrap">
                                {x2Values.map((x, index) => (
                                    <input
                                        key={`x2${index}`}
                                        type="number"
                                        className="form-control m-1"
                                        style={{ width: "60px" }} // ปรับขนาดความกว้างของช่องอินพุต
                                        value={x}
                                        onChange={(e) => {
                                            const newX2Values = [...x2Values];
                                            newX2Values[index] = parseFloat(e.target.value);
                                            setX2Values(newX2Values);
                                        }}
                                        placeholder={`X2-${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label>Y Values</label>
                            <div className="d-flex flex-wrap">
                                {yValues.map((y, index) => (
                                    <input
                                        key={`y${index}`}
                                        type="number"
                                        className="form-control m-1"
                                        style={{ width: "60px" }} // ปรับขนาดความกว้างของช่องอินพุต
                                        value={y}
                                        onChange={(e) => {
                                            const newYValues = [...yValues];
                                            newYValues[index] = parseFloat(e.target.value);
                                            setYValues(newYValues);
                                        }}
                                        placeholder={`Y-${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Value for X1"
                                value={value1}
                                onChange={(e) => setValue1(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Value for X2"
                                value={value2}
                                onChange={(e) => setValue2(parseFloat(e.target.value))}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success mt-3 w-100">
                        Calculate
                    </button>
                </form>
                <div className="mt-4">
                    <center>
                        <h5>Equation: y = {coefficients[0]?.toFixed(2)} + {coefficients[1]?.toFixed(2)} * X1 + {coefficients[2]?.toFixed(2)} * X2</h5>
                        <h5>Predicted Y for (X1={value1}, X2={value2}): {predictedY}</h5>
                    </center>
                </div>
            </div>
        </div>
    );
}
