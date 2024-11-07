import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Form_NewtonDividedDifferences() {
  const [points, setPoints] = useState([{ x: 0, y: 0 }]);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState([]);
  const [interpolatedValue, setInterpolatedValue] = useState(null);

  const handlePointChange = (index, axis, val) => {
    const newPoints = [...points];
    newPoints[index][axis] = parseFloat(val);
    setPoints(newPoints);
  };

  const addPoint = () => {
    setPoints([...points, { x: 0, y: 0 }]);
  };

  const calculateDividedDifferences = () => {
    const n = points.length;
    let table = Array(n).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      table[i][0] = points[i].y;
    }

    for (let j = 1; j < n; j++) {
      for (let i = 0; i < n - j; i++) {
        table[i][j] = (table[i + 1][j - 1] - table[i][j - 1]) / (points[i + j].x - points[i].x);
      }
    }

    const coefficients = table[0].slice(0, n);
    setResult(coefficients);

    // Interpolation calculation
    let interpolated = coefficients[0];
    let productTerm = 1;
    for (let i = 1; i < coefficients.length; i++) {
      productTerm *= (value - points[i - 1].x);
      interpolated += coefficients[i] * productTerm;
    }
    setInterpolatedValue(interpolated);
  };

  const chartData = points.map((point) => ({ x: point.x, y: point.y }));

  return (
    <div className="container-xxl">
      <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-75 p-3 shadow">
        <center><h2>Linear/Quadratic/Polynomial</h2></center>
        
        <h3>Input Points</h3>
        {points.map((point, index) => (
          <div key={index} className="d-flex justify-content-center mb-2">
            <input
              type="number"
              placeholder="x"
              value={point.x}
              onChange={(e) => handlePointChange(index, 'x', e.target.value)}
              style={{ width: 60, marginRight: 5 }}
              className="form-control"
            />
            <input
              type="number"
              placeholder="y"
              value={point.y}
              onChange={(e) => handlePointChange(index, 'y', e.target.value)}
              style={{ width: 60 }}
              className="form-control"
            />
          </div>
        ))}
        <button className="btn btn-secondary mb-3" onClick={addPoint}>
          Add Point
        </button>

        <div>
          <input
            type="number"
            placeholder="Value to Interpolate"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            className="form-control mb-3"
            style={{ width: 200, margin: "0 auto", display: "block" }}
          />
        </div>

        <button className="btn btn-primary w-100 mb-3" onClick={calculateDividedDifferences}>
          Calculate
        </button>

        {result.length > 0 && (
          <div className="mt-4 text-center">
            <h4>Divided Differences Coefficients:</h4>
            {result.map((coef, index) => (
              <div key={index}>Coefficient {index}: {coef.toFixed(4)}</div>
            ))}
            <h4>Interpolated Value at {value}: {interpolatedValue && interpolatedValue.toFixed(4)}</h4>
          </div>
        )}

        <LineChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" label={{ value: "X", position: "insideBottomRight", offset: -10 }} />
          <YAxis label={{ value: "Y", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
}
