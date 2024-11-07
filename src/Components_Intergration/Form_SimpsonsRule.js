import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { evaluate } from 'mathjs';

export default function Form_SimpsonsRule() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [n, setN] = useState(4); // จำนวนช่วงเริ่มต้น (ควรเป็นเลขคู่)
    const [functionStr, setFunctionStr] = useState("x^2"); // สมการเริ่มต้น
    const [result, setResult] = useState(null);

    const calculateSimpsonsRule = () => {
        if (n % 2 !== 0) {
            alert("n ต้องเป็นเลขคู่เพื่อใช้ Simpson's Rule");
            return;
        }

        try {
            const h = (b - a) / n;
            let sum = evaluate(functionStr, { x: a }) + evaluate(functionStr, { x: b });

            for (let i = 1; i < n; i++) {
                const x = a + i * h;
                sum += (i % 2 === 0 ? 2 : 4) * evaluate(functionStr, { x });
            }

            const area = (h / 3) * sum;
            setResult(area);
        } catch (error) {
            alert("โปรดใส่สมการที่ถูกต้อง");
        }
    };

    return (
        <div className="container-xxl">
            <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-50 p-3 shadow p-3 mb-5 bg-body rounded">
                <center><h1>Simpson's Rule</h1></center>
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
                    <label className="form-label">Value of a</label>
                    <input
                        type="number"
                        className="form-control"
                        value={a}
                        onChange={(e) => setA(parseFloat(e.target.value))}
                        placeholder="Enter value for a"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Value of b</label>
                    <input
                        type="number"
                        className="form-control"
                        value={b}
                        onChange={(e) => setB(parseFloat(e.target.value))}
                        placeholder="Enter value for b"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Number of Subintervals (n)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={n}
                        onChange={(e) => setN(parseInt(e.target.value))}
                        placeholder="Enter an even number for subintervals"
                    />
                </div>
                <button className="btn btn-success w-100" onClick={calculateSimpsonsRule}>
                    Calculate Area
                </button>
                {result !== null && (
                    <div className="mt-4 text-center">
                        <h5>Area under the curve: <span className="text-primary">{result.toFixed(4)}</span></h5>
                    </div>
                )}
            </div>
        </div>
    );
}
