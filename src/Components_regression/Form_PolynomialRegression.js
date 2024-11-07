import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { findregression, findsum } from '../Input_regression/TestNewtonreg';

export default function Form_PolynomialRegression() {
    const [xValues, setXValues] = useState(Array(5).fill(0));
    const [yValues, setYValues] = useState(Array(5).fill(0));
    const [value, setValue] = useState(0);
    const [regressionResult, setRegressionResult] = useState(null);
    const [ansa, setAnsa] = useState(0);
    const [ansb, setAnsb] = useState(0);

    const calculatePolynomialRegression = (event) => {
        event.preventDefault();
        const ans = findsum(xValues, yValues);
        const regressionCoeff = findregression(ans);
        setAnsa(regressionCoeff[0]);
        setAnsb(regressionCoeff[1]);
        const calculatedValue = regressionCoeff[0] + regressionCoeff[1] * value;
        setRegressionResult(calculatedValue);
    };

    const chartData = xValues.map((x, index) => ({ x: x, y: yValues[index] }));
    const formulaLineData = xValues.map((x) => ({ x: x, y: ansa + ansb * x }));

    return (
        <div className="container-xxl">
            <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-50 p-3 shadow p-3 mb-5 bg-body rounded">
                <center><h1>Polynomial Regression</h1></center>
                <form onSubmit={calculatePolynomialRegression}>
                    <center>
                        <div className='row'>
                            <div className='col'>
                                <label>X Values</label>
                                <div className='mb-3 row g-3 w-75'>
                                    {xValues.map((x, index) => (
                                        <input
                                            key={`x${index}`}
                                            type="number"
                                            className="p-2 border border-2 border-dark form-control w-45"
                                            step={0.1}
                                            value={x}
                                            onChange={(e) => {
                                                const newXValues = [...xValues];
                                                newXValues[index] = parseFloat(e.target.value);
                                                setXValues(newXValues);
                                            }}
                                            placeholder={`X${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <input
                                    type="number"
                                    className="p-2 border border-4 border-success form-control w-45"
                                    placeholder="Value"
                                    step={0.1}
                                    value={value}
                                    onChange={(e) => setValue(parseFloat(e.target.value))}
                                />
                            </div>
                            <div className='col'>
                                <label>Y Values</label>
                                <div className='mb-3 row g-3 w-75'>
                                    {yValues.map((y, index) => (
                                        <input
                                            key={`y${index}`}
                                            type="number"
                                            className="p-2 border border-2 border-dark form-control w-45"
                                            step={0.1}
                                            value={y}
                                            onChange={(e) => {
                                                const newYValues = [...yValues];
                                                newYValues[index] = parseFloat(e.target.value);
                                                setYValues(newYValues);
                                            }}
                                            placeholder={`Y${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <button type="submit" className="btn btn-success border border-4 form-control p-2">
                                    Calculate
                                </button>
                            </div>
                            <div className='col'>
                                <ScatterChart
                                    width={500}
                                    height={400}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 20,
                                    }}
                                >
                                    <CartesianGrid />
                                    <XAxis type="number" dataKey="x" name="x" />
                                    <YAxis type="number" dataKey="y" name="y" />
                                    <Tooltip cursor={{ strokeDasharray: '2 2' }} />
                                    <Legend />
                                    <Scatter name="Data Points" data={chartData} fill="#8884d8" />
                                    <Scatter name="Regression Line" data={formulaLineData} fill="#82ca9d" line shape="" />
                                </ScatterChart>
                            </div>
                        </div>
                    </center>
                </form>
                <br />
                <center>
                    <h5>Equation is y = {ansa.toFixed(2)} + {ansb.toFixed(2)}X</h5>
                    <h5>Value of {value} is: {regressionResult}</h5>
                </center>
            </div>
        </div>
    );
}
