import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { evaluate } from 'mathjs';

export default function Form_FirstDividedDifferences() {
    const [x, setX] = useState(0);
    const [h, setH] = useState(0.1); // ค่าระยะห่างเริ่มต้น
    const [functionStr, setFunctionStr] = useState("x^2"); // สมการเริ่มต้น
    const [method, setMethod] = useState("forward"); // วิธีการเริ่มต้นคือ forward
    const [result, setResult] = useState(null);

    const calculateDividedDifference = () => {
        try {
            let derivative;

            if (method === "forward") {
                derivative = (evaluate(functionStr, { x: x + h }) - evaluate(functionStr, { x })) / h;
            } else if (method === "backward") {
                derivative = (evaluate(functionStr, { x }) - evaluate(functionStr, { x: x - h })) / h;
            } else if (method === "central") {
                derivative = (evaluate(functionStr, { x: x + h }) - evaluate(functionStr, { x: x - h })) / (2 * h);
            }

            setResult(derivative);
        } catch (error) {
            alert("โปรดใส่สมการที่ถูกต้อง");
        }
    };

    return (
        <div className="container-xxl">
            <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-50 p-3 shadow p-3 mb-5 bg-body rounded">
                <center><h1>First Divided Differences</h1></center>
                <div className="mb-3">
                    <label className="form-label">Function f(x)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={functionStr}
                        onChange={(e) => setFunctionStr(e.target.value)}
                        placeholder="Enter function, e.g., x^2"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Value of x</label>
                    <input
                        type="number"
                        className="form-control"
                        value={x}
                        onChange={(e) => setX(parseFloat(e.target.value))}
                        placeholder="Enter value for x"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Step Size (h)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={h}
                        onChange={(e) => setH(parseFloat(e.target.value))}
                        placeholder="Enter step size h"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Method</label>
                    <select
                        className="form-select"
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                    >
                        <option value="forward">Forward Divided-Difference</option>
                        <option value="backward">Backward Divided-Difference</option>
                        <option value="central">Central Divided-Difference</option>
                    </select>
                </div>
                <button className="btn btn-info w-100" onClick={calculateDividedDifference}>
                    Calculate Derivative
                </button>
                {result !== null && (
                    <div className="mt-4 text-center">
                        <h5>Estimated Derivative: <span className="text-primary">{result.toFixed(4)}</span></h5>
                    </div>
                )}
            </div>
        </div>
    );
}
